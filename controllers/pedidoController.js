const Cardapio = require('../models/Cardapio');

let pedidoController = {
    viewFormPedido: (req, res) => {
        let listaDePizza = Cardapio.listarCardapio();
        res.render('pedido', {cardapio:listaDePizza});
    },
    criarPedido: (req, res) => {
        res.render('sucessoPedido', {nomePizza:req.body.nomePizza, usuario:req.body.usuario, endereco:req.body.endereco});
        //res.send('Seu pedido de uma pizza ' + req.body.nomePizza + ' será enviado para ' + req.body.usuario + ' em ' + req.body.endereco)
    }
}

module.exports = pedidoController;