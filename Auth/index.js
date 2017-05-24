var express = new require("express"),
    bodyParser = new require("body-parser"),
    config = new require("./config")

var app = express();
app.use(bodyParser.json());

app.listen(config.port, ()=> {
    console.log("Aplicação rodando na porta: "+ config.port);
});