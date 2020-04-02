const express = require('express')
const cardapioController = require('../controllers/cardapioController');
const multer = require('multer');
const path = require('path');
const autenticacao = require('../middlewares/autenticacao');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('public','cardapioIMG'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })


let route = express.Router()
//rotas a partir daqui!

route.get('/cadastrar/:pizza/:preco', (req, res)=>{
    res.send("Cadastrou pizza com sucesso!")
})

route.get('/ver', autenticacao, cardapioController.listarCardapio)
route.get('/cadastro', cardapioController.viewFormCadastro)

route.post('/cadastro', upload.any() ,cardapioController.criarPizza)
//route.delete('/deletar', cardapioController.apagarPizza)
route.delete('/deletar/:posicao', cardapioController.removerPizza)

module.exports = route