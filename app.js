const express = require('express');
const app =  express();
const port = 3000;

var session = require("express-session");


app.use(express.static("app/public"));

app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
}));

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

var rotas = require("./app/routes/router");
app.use("/", rotas);

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});
 
// ainda não temos algumas páginas
// Não sei conectar js nos arquivos ejs
// Não consigo fazer a pasta images funcionar ainda
// Ainda não coloquei o projeto no git
