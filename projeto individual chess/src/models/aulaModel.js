var database = require("../database/config");

function listar() {
    console.log(
        "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
    );
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log(
        "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
        email,
        senha
    );
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(idAula, idUsuario) {
    console.log(
        "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
        idAula,
        idUsuario
    );

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO assistidas (qtdAulas, fkAula, fkUsuario) VALUES (1, '${idAula}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimasMedidas(idUsuario) {
    instrucaoSql = "";

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT (sum(acertos)) AS 'Acertos', (sum(erros)) AS 'Erros' FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
        JOIN quizes ON respostas.fkQuiz = quizes.idQuiz WHERE usuario.idUsuario = ${idUsuario};`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            SELECT aulas.tipo, SUM(assistidas.qtdAulas) AS totalAulas
            FROM assistidas
            JOIN aulas ON assistidas.fkAula = aulas.idAula
            WHERE assistidas.fkUsuario = ${idUsuario}
            GROUP BY aulas.tipo;
            `;
    } else {
        console.log(
            "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
        );
        return;
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {
    instrucaoSql = "";

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT (sum(acertos)) AS 'Acertos', (sum(erros)) AS 'Erros' FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
JOIN quizes ON respostas.fkQuiz = quizes.idQuiz WHERE usuario.idUsuario = ${idUsuario};`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            SELECT aulas.tipo, SUM(assistidas.qtdAulas) AS totalAulas
            FROM assistidas
            JOIN aulas ON assistidas.fkAula = aulas.idAula
            WHERE assistidas.fkUsuario = ${idUsuario}
            GROUP BY aulas.tipo;
            `;
    } else {
        console.log(
            "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
        );
        return;
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarAulasAssistidas(idUsuario) {
    instrucaoSql = "";

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT (sum(acertos)) AS 'Acertos', (sum(erros)) AS 'Erros' FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
JOIN quizes ON respostas.fkQuiz = quizes.idQuiz WHERE usuario.idUsuario = ${idUsuario};`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT aulas.idAula, SUM(assistidas.qtdAulas) AS totalAulas
        FROM assistidas
        JOIN aulas ON assistidas.fkAula = aulas.idAula
        WHERE assistidas.fkUsuario = ${idUsuario}
        GROUP BY aulas.idAula;
            `;
    } else {
        console.log(
            "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
        );
        return;
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function excluir(idAula, idUsuario) {
    console.log(
        "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
        idAula,
        idUsuario
    );

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
     DELETE FROM assistidas WHERE fkAula = ${idAula} AND fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas,
    buscarAulasAssistidas,
    excluir
};
