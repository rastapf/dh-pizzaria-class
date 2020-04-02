const fs = require('fs');
const path = require('path');

const db = path.join('usuario.json');

function listarUsuario(){
    let usuario = JSON.parse(fs.readFileSync(db, {encoding:'utf-8'}));
    return usuario
}

function cadastrarUsuario(nome, email, password) {
    let listaUsuario = JSON.parse(fs.readFileSync(db, {encoding:'utf-8'}));
    
    listaUsuario.push({nome, email, password});

    fs.writeFileSync(db, JSON.stringify(listaUsuario));

    return true;
}

function removerUsuario(posicao) {
    let listaUsuario = JSON.parse(fs.readFileSync(db, {encoding:'utf-8'}));

    listaUsuario.splice(posicao, 1);

    fs.writeFileSync(db, JSON.stringify(listaUsuario));

    return true;
}

function buscarUsuario(email) {
    let users = JSON.parse(fs.readFileSync(db, {encoding:'utf-8'}));

    let usuario = users.filter(user => {
        return user.email == email;
    });
    console.log(usuario);
    return usuario;
}

module.exports = {listarUsuario, cadastrarUsuario, removerUsuario, buscarUsuario}