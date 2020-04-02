const express = require('express')
const usuarioController = require('../controllers/usuarioController');

let route = express.Router()

//rotas a partir daqui!

route.get('/cadastrar/:pizza/:preco', (req, res)=>{
    res.send("Cadastrou pizza com sucesso!")
})

route.get('/ver', usuarioController.listarUsuario)
route.get('/cadastro', usuarioController.viewFormCadastro)

route.post('/cadastro', usuarioController.criarUsuario)

route.delete('/deletar/:posicao', usuarioController.removerUsuario)

route.get('/login', usuarioController.viewFormLogin)
route.post('/login', usuarioController.Login)

module.exports = route;