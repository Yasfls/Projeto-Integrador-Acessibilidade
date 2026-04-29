const express = require('express');
const router = express.Router();
const userApi = require('../API/user');

router.post('/login', userApi.login);
router.post('/users', userApi.criarUsuario);

router.get('/users', userApi.validarToken, userApi.listarUsuarios); 
router.put('/users/:id', userApi.validarToken, userApi.alterarUsuario);
router.delete('/users/:id', userApi.validarToken, userApi.deletarUsuario);

module.exports = router;
