
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const usersFile = './data/users.json';
let usuarios = [];

if (fs.existsSync(usersFile)) {
  usuarios = JSON.parse(fs.readFileSync(usersFile));
}

function guardarUsuarios() {
  fs.writeFileSync(usersFile, JSON.stringify(usuarios, null, 2));
}

exports.crearUsuario = (req, res) => {
  const { nombre, email, password } = req.body;
  if (usuarios.find(u => u.email === email)) {
    return res.status(400).json({ mensaje: 'El email ya está registrado' });
  }
  const hashed = bcrypt.hashSync(password, 8);
  const nuevo = {
    id: uuidv4(),
    nombre,
    email,
    password: hashed,
    fecha_creacion: new Date().toISOString()
  };
  usuarios.push(nuevo);
  guardarUsuarios();
  res.status(201).json(nuevo);
};

exports.listarUsuarios = (req, res) => {
  res.json(usuarios.map(u => ({ ...u, password: undefined })));
};

exports.obtenerUsuario = (req, res) => {
  const usuario = usuarios.find(u => u.id === req.params.id);
  if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  res.json({ ...usuario, password: undefined });
};

exports.actualizarUsuario = (req, res) => {
  const usuario = usuarios.find(u => u.id === req.params.id);
  if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  usuario.nombre = req.body.nombre || usuario.nombre;
  guardarUsuarios();
  res.json(usuario);
};

exports.eliminarUsuario = (req, res) => {
  const index = usuarios.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  usuarios.splice(index, 1);
  guardarUsuarios();
  res.json({ mensaje: 'Usuario eliminado' });
};

exports.loginUsuario = (req, res) => {
  const { email, password } = req.body;
  const usuario = usuarios.find(u => u.email === email);
  if (!usuario) return res.status(401).json({ mensaje: 'Credenciales inválidas' });
  const valido = bcrypt.compareSync(password, usuario.password);
  if (!valido) return res.status(401).json({ mensaje: 'Credenciales inválidas' });
  const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
  res.json({ token });
};
