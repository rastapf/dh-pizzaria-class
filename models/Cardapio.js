/*let cardapio = [
    {nome:"Calamussa", preco:"R$30,00"},
    {nome:"Frango com Catupiry", preco:"R$35,00"},
    {nome:"Romanesca", preco:"R$35,00"}
]*/

const fs = require('fs');
const path = require('path');

const db = path.join('cardapio.json');

function listarCardapio(){
    let cardapio = JSON.parse(fs.readFileSync(db, {encoding:'utf-8'}));
    return cardapio
}

function cadastrarPizza(nome, preco) {
    let listaCardapio = JSON.parse(fs.readFileSync(db, {encoding:'utf-8'}));
    
    listaCardapio.push({nome,preco});

    return fs.writeFileSync(db, JSON.stringify(listaCardapio));
}


module.exports = {listarCardapio, cadastrarPizza}