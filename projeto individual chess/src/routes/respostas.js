var express = require("express");
var router = express.Router();

var respostasController = require("../controllers/respostasController");

router.get("/", function (req, res) {
    respostasController.testar(req, res);
});

router.get("/listar", function (req, res) {
    respostasController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    respostasController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    respostasController.entrar(req, res);
});

module.exports = router;