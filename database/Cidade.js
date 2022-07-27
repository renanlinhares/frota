/*
const Sequelize = require("sequelize");
const connection = require("./database");

const Cidade = connection.define('cidade', {
    
    idCidade: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

Cidade.sync({force: false}).then(() => {});  //vai sincronizar o que tem nesse arquivo com o Banco de Dados. Não vai forçar a criação da tabela caso já exista

module.exports = Cidade; //exporta a variável pergunta

*/