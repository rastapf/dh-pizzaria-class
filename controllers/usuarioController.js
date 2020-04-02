const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

let usuarioController = {
    listarUsuario: (req, res)=>{
        let listaDeUsuarios = Usuario.listarUsuario();
        res.render('usuario', {usuarios:listaDeUsuarios, tituloDaPagina:"Será que da certo?"})
    },
    viewFormCadastro: (req, res) =>{
        res.render('cadastroUsuario')
    },
    criarUsuario: (req, res) => {
        let {nomeUsuario, emailUsuario, senhaUsuario}= req.body;

        let resultado = Usuario.cadastrarUsuario(nomeUsuario, emailUsuario, bcrypt.hashSync(senhaUsuario, 12));

        if (resultado) {
            res.render('cadastroUsuario', {msg:"Usuário cadastrado com sucesso!"});
        }
    },
    
    removerUsuario: (req, res) => {
        let {posicao} = req.params;

        Usuario.removerUsuario(posicao);
        res.redirect('/usuarios/ver');
    },

    viewFormLogin: (req, res) => {
        res.render('login')
    },

    Login: (req, res) => {
        let {emailUsuario, senhaUsuario} = req.body;

        let [usuario] = Usuario.buscarUsuario(emailUsuario);

        if (usuario == undefined) {
            return res.render('login', {msg: 'E-mail ou senha inválida'});
        };

        if (!bcrypt.compareSync(senhaUsuario, usuario.password)) {
            return res.render('login', {msg: 'E-mail ou senha inválida'});
        }

        req.session.usuarioLogado = usuario.nome;

        res.redirect('/cardapio/ver');
    }


}
 
module.exports = usuarioController