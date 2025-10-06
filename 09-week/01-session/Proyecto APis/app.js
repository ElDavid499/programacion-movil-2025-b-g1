
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api/usuarios', userRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
