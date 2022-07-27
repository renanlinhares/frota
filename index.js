const express = require("express"); //importa o express
const app = express(); // iniciando o express
const bodyParser = require("body-parser");
const connection = require("./database/database"); // Serve para a conexão com o Banco de Dados
const Cidade = require("./database/Cidade");
const Resposta = require("./database/Resposta");

app.set('view engine', 'ejs'); //diz para o express usar o EJS como View Engine
app.use(express.static('public')); //permite o uso de arquivos estáticos

app.use(bodyParser.urlencoded({ extended: false })) //permite com que a pessoa envie os dados do formulário e o bodyparse vai traduzir para uma estrutura JS.
app.use(bodyParser.json()) //OPCIONAL! Faz com que a gente leia dados de formulário enviados via JSON

app.get("/cadastraPessoa", (req, res) => {

    res.render("cadastraPessoa");
});


app.get("/consultaPessoa", (req, res) => {
    var sql = "SELECT * from pessoas ORDER BY nome ASC";
    connection.query(sql, function (err, pessoa, fields) {
        if (err) throw err;
        res.render("consultaPessoa", {
            pessoa: pessoa
        });
    });
});

app.get("/transportePorCNS", (req, res) => {
    var sql = "SELECT * FROM transportes";
    connection.query(sql, function (err, transporte, fields) {
        if (err) throw err;
        res.render("transportePorCNS", {
            transporte: transporte
        });
    });
});

app.get("/cadastraEstabelecimento", (req, res) => {
    var sql = "SELECT * from destinos ORDER BY idDestinos; SELECT * FROM cidade ORDER BY nome";
    connection.query(sql, [2, 1], function (err, destinos, fields) {
        if (err) throw err;
        res.render("cadastraEstabelecimento", {
            destinos: destinos
        });
    });
});

app.get("/cadastraTransporte", (req, res) => {
    var sql = "SELECT * from destinos ORDER BY idDestinos; SELECT * FROM pessoas ORDER BY nome"
    connection.query(sql, [2, 1], function (err, destinos, fields) {
        if (err) throw err;
        res.render("cadastraTransporte", {
            destinos: destinos
        });
    });
});


app.listen(8181, () => {
    console.log("App rodando");
});



/*
app.post("/salvarpergunta", (req, res) => {

    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({    //salva a pergunta no banco de dados
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/"); //redireciona para a página principal do projeto
    });
});

app.get("/pergunta/:id",(req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id : id}
    }).then(pergunta => {
        if(pergunta != undefined){ //Pergunta foi achada
            res.render("pergunta", {
                pergunta: pergunta
            })
        } else { // Não foi encontrada
            res.redirect("/");
        }
    })
});
*/

//Database
/*
connection
    .authenticate()  //O método autenticate vai tentar logar no mysql
    .then(() => {
        console.log("Conexão feita com o Banco de Dados")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })
*/



/*

//Rotas
app.get("/",(req,res) => {
    Cidade.findAll({})
        .then(cidade => {
            res.render("index", {
                cidade: cidade
            });
        });
});

app.get("/", (req, res) => {
    Cidade.findAll({ raw: true, order: [
        ['idCidade','DESC'] // ASC = ordenação crescente e DESC = ordenação decrescente
    ]}).then(cidade => {  //equivalente a SELECT * ALL FROM perguntas
        res.render("index", {
            cidade: cidade
        });
    });
});

*/
