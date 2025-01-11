const { Router } = require('express');
const { encontraUsuariosController } = require('./controllers/encontraUsuariosController');
const router = Router();


router.post('/login', encontraUsuariosController)

module.exports = {router};