var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT (sum(acertos)) AS 'Acertos', (sum(erros)) AS 'Erros' FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
        JOIN quizes ON respostas.fkQuiz = quizes.idQuiz WHERE usuario.idUsuario = ${idUsuario};`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT (sum(acertos)) AS 'Acertos', (sum(erros)) AS 'Erros' FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
        JOIN quizes ON respostas.fkQuiz = quizes.idQuiz WHERE usuario.idUsuario = ${idUsuario};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT (sum(acertos)) AS 'Acertos', (sum(erros)) AS 'Erros' FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
JOIN quizes ON respostas.fkQuiz = quizes.idQuiz WHERE usuario.idUsuario = ${idUsuario};`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT (sum(acertos)) AS 'Acertos', (sum(erros)) AS 'Erros' FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
JOIN quizes ON respostas.fkQuiz = quizes.idQuiz WHERE usuario.idUsuario = ${idUsuario};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}