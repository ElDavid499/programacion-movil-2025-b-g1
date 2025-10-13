const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Low, JSONFile } = require('lowdb');
const { nanoid } = require('nanoid');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const file = path.join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

(async () => {
  await db.read();
  db.data = db.data || { users: [], habits: [], records: [] };
  await db.write();
})();

// Auth-lite: register/login by email only (demo)
app.post('/api/auth/register', async (req, res) => {
  await db.read();
  const { name, email } = req.body;
  if(!email) return res.status(400).json({ error: 'email required' });
  let user = db.data.users.find(u => u.email === email);
  if(user) return res.status(400).json({ error: 'user exists' });
  user = { id: nanoid(), name: name||'User', email };
  db.data.users.push(user);
  await db.write();
  res.json({ user });
});

app.post('/api/auth/login', async (req, res) => {
  await db.read();
  const { email } = req.body;
  const user = db.data.users.find(u => u.email === email);
  if(!user) return res.status(404).json({ error: 'user not found' });
  res.json({ user });
});

// Habits CRUD
app.get('/api/habits', async (req, res) => {
  await db.read();
  const userId = req.query.userId;
  const habits = userId ? db.data.habits.filter(h => h.userId === userId) : db.data.habits;
  res.json(habits);
});

app.post('/api/habits', async (req, res) => {
  await db.read();
  const { userId, tipo, descripcion, frecuencia, fechaInicio } = req.body;
  if(!userId || !tipo) return res.status(400).json({ error: 'userId and tipo required' });
  const habit = { id: nanoid(), userId, tipo, descripcion: descripcion||'', frecuencia: frecuencia||'diaria', progreso: 0, fechaInicio: fechaInicio||new Date().toISOString() };
  db.data.habits.push(habit);
  await db.write();
  res.json(habit);
});

app.put('/api/habits/:id', async (req, res) => {
  await db.read();
  const id = req.params.id;
  const habit = db.data.habits.find(h => h.id === id);
  if(!habit) return res.status(404).json({ error: 'not found' });
  Object.assign(habit, req.body);
  await db.write();
  res.json(habit);
});

app.delete('/api/habits/:id', async (req, res) => {
  await db.read();
  const id = req.params.id;
  db.data.habits = db.data.habits.filter(h => h.id !== id);
  await db.write();
  res.json({ ok: true });
});

// Records: mark habit as completed on a date
app.post('/api/records', async (req, res) => {
  await db.read();
  const { userId, habitId, fecha, cumplido } = req.body;
  if(!userId || !habitId || typeof cumplido !== 'boolean') return res.status(400).json({ error: 'userId, habitId, cumplido required' });
  const record = { id: nanoid(), userId, habitId, fecha: fecha||new Date().toISOString().slice(0,10), cumplido };
  db.data.records.push(record);
  // update progress simple calculation
  const habRecords = db.data.records.filter(r => r.habitId === habitId && r.cumplido);
  const habit = db.data.habits.find(h => h.id === habitId);
  if(habit){
    // naive progress: count of completions modulo 100 for demo
    habit.progreso = Math.min(100, Math.round((habRecords.length/21)*100)); // assume goal 21 days
  }
  await db.write();
  res.json(record);
});

// Simple progress endpoint
app.get('/api/progress', async (req, res) => {
  await db.read();
  const userId = req.query.userId;
  if(!userId) return res.status(400).json({ error: 'userId required' });
  const habits = db.data.habits.filter(h => h.userId === userId);
  const progress = habits.map(h => ({ habitId: h.id, tipo: h.tipo, progreso: h.progreso }));
  res.json(progress);
});

// Serve as static for frontend in production if needed
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Backend running on port', PORT));
