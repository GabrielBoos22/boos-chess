var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT sum(acertos) AS 'Acertos', sum(erros) AS 'Erros', usuario.username,
    sum(acertos) / (sum(acertos) + sum(erros)) AS 'Maior Porcentagem'
    FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
    JOIN quizes ON respostas.fkQuiz = quizes.idQuiz GROUP BY usuario.username ORDER BY count(usuario.idUsuario) 
    DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
};