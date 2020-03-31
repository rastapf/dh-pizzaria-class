const express = require('express');
const pedidoController = require('../controllers/pedidoController');

let route = express.Router();

route.get('/criar', pedidoController.viewFormPedido);
route.post('/criar', pedidoController.criarPedido);

module.exports = route;