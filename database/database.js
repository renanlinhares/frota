var mysql = require("mysql2");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'frota_teste',
    port: '3308',
    multipleStatements: true
});
    connection.connect(function(err) {
        if (err) throw err;
        console.log('Conectou ao banco')
    })

    module.exports = connection;


/*async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

        const mysql = require("mysql2/promise");
        const connection = await mysql.createConnection("mysql://root:123@localhost:3308/frota_teste") //faz a conexão com o BD via mysql
        console.log("Conectou no MySQL!")
        global.connection = connection;
        return connection;
}


async function selectCidades(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM cidade;');
    return rows;
}
  
module.exports = {selectCidades} */