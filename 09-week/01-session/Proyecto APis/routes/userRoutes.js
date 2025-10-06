
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../utils/authMiddleware');

router.post('/', userController.crearUsuario);
router.get('/', auth, userController.listarUsuarios);
router.get('/:id', auth, userController.obtenerUsuario);
router.put('/:id', auth, userController.actualizarUsuario);
router.delete('/:id', auth, userController.eliminarUsuario);

module.exports = router;
