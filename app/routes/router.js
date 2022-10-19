var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(12);

const { body, validationResult } = require("express-validator");

var fabricaDeConexao = require("../../config/connection-factory");
var conexao = fabricaDeConexao();

conexao.connect(function (err) {
  if (err) throw err;
  console.log("Connectado!");
});

var UsuarioDAO = require("../models/UsuarioDAO");
UsuarioDAO = new UsuarioDAO(conexao);

router.get("/index", function (req, res) {
  res.render("pages/index");
});

router.get("/home", function (req, res) {
  if (req.session.autenticado) {
    autenticado = { autenticado: req.session.ID_USUARIO };

  } else {
    autenticado = { autenticado: null }
    res.render("pages/home", { autenticado });
  }
})

router.get("/cadastro", function (req, res) {
  res.render("pages/cadastro");
});

router.get("/esqueceu_senha", function (req, res) {
  res.render("pages/esqueceu_senha");
});

router.get("/esqueceu_senha_continuar", function (req, res) {
  res.render("pages/esqueceu_senha_continuar");
});

router.get("/sobre", function (req, res) {
  res.render("pages/sobre");
});

router.get("/planos", async function (req, res) {
  res.render("pages/planos");
});

router.get("/contato", function (req, res) {
  res.render("pages/contato");
});

router.get("/agua", function (req, res) {
  res.render("pages/agua");
});

router.get("/meta", function (req, res) {
  res.render("pages/meta");
});

router.get("/massa", function (req, res) {
  res.render("pages/massa");
});

router.get("/taxa-basal-homem", function (req, res) {
  res.render("pages/taxa-basal-homem");
});

router.get("/crono", function (req, res) {
  res.render("pages/crono");
});

router.get("/imc", function (req, res) {
  res.render("pages/imc");
});

router.get("/emagrecimento", function (req, res) {
  res.render("pages/emagrecimento");
});

router.get("/login", async function (req, res) {
  res.render("pages/login");
});


// router.get("/home", function (req, res) {
//   if (req.session.autenticado == true && req.session.usu_tipo == 1) {
//     autenticado = { autenticado: req.session.usu_autenticado };
//     res.render("pages/home", autenticado);
//   } else {
//     res.send("Bem Vindo(a)");
//   }
// });

router.post("/cadastro", async function (req, res) {
    var dadosForm = {
      NOME: req.body.nome,
      EMAIL: req.body.email,
      SENHA: req.body.password,
      TELEFONE: req.body.telefone,
    };

    var result = conexao.query(
      "INSERT INTO  USUARIO SET ?",
      [dadosForm.user_usuario, dadosForm.user_usuario],
      function (error, results, fields) {
        if (error) throw error;
        res.redirect("/login");
      }
    )
  }
);

// http://localhost:3000/auth
router.post('/login', function (req, res) {
  // Capture the input fields
  var EMAIL = req.body.email;
  var SENHA = req.body.password;
  console.log(EMAIL, SENHA)
  // Ensure the input fields exists and are not empty
  // Execute SQL query that'll select the account from the database based on the specified username and password
  conexao.query('SELECT * FROM usuario WHERE EMAIL = ? AND SENHA = ?', [EMAIL, SENHA], function (error, results, fields) {
    // If there is an issue with the query, output the error
    if (error) throw error;
    // If the account exists
    var total = Object.keys(results).length;
    if (total == 1) {
      req.session.autenticado = true;
      req.session.ID_USUARIO = results[0].ID_USUARIO;
    } else {
      req.session.autenticado = null;
    } res.redirect("/home");
  })

});

module.exports = router;
