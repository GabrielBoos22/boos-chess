var express = require("express");
var router = express.Router();

var aulaController = require("../controllers/aulaController");

router.get("/", function (req, res) {
    aulaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    aulaController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    aulaController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    aulaController.entrar(req, res);
});

router.get("/ultimas/:idUsuario", function (req, res) {
    aulaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    aulaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/assistidas/:idUsuario", function (req, res) {
    aulaController.buscarAulasAssistidas(req, res);
})

router.post("/excluir", function (req, res) {
    aulaController.excluirAulasAssistidas(req, res);
})

module.exports = router;