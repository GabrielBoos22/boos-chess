CREATE DATABASE booschess;
DROP DATABASE booschess;
USE booschess;

CREATE TABLE quizes (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45));

CREATE TABLE usuario(
idUsuario INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45),
email VARCHAR(45),
username VARCHAR(45),
senha VARCHAR(64)
);

CREATE TABLE respostas(
idRespostas INT auto_increment,
acertos VARCHAR(45),
erros VARCHAR(45),
fkQuiz INT,
foreign key (fkQuiz)
 references quizes(idQuiz),
 fkUsuario INT,
 foreign key (fkUsuario)
 references usuario(idUsuario),
 primary key (idRespostas, fkQuiz, fkUsuario));
 
CREATE TABLE aulas (
idAula INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(45),
nome VARCHAR(45));

 CREATE TABLE assistidas(
idAssistidas INT auto_increment,
qtdAulas VARCHAR(45),
fkAula INT,
foreign key (fkAula)
 references aulas(idAula),
 fkUsuario INT,
 foreign key (fkUsuario)
 references usuario(idUsuario),
 primary key (idAssistidas, fkAula, fkUsuario));
 
 
/* USUARIO LOGOU */
INSERT INTO usuario(nome, username, email, senha) VALUES
('Gabriel', 'gabrielBoos5' ,'gabriel.bduarte@sptech.school', '123456');

SELECT * FROM usuario;

/* CADASTRANDO OS QUIZES */
INSERT INTO quizes VALUES
(NULL, 'iniciante'),
(NULL, 'intermediario'),
(NULL, 'profissional');

INSERT INTO aulas VALUES
(NULL, 'Iniciante','Como as Peças se Movem'),
(NULL, 'Iniciante','Jogando Xadrez'),
(NULL, 'Iniciante','Princípios da Abertura'),
(NULL, 'Iniciante','Vencendo a Partida'),
(NULL, 'Iniciante','Capturando Peças'),
(NULL, 'Iniciante','Atacando o Rei'),
(NULL, 'Iniciante','Primeiros Lances'),
(NULL, 'Intermediario','Extraia o Máximo Possível das Suas Peças'),
(NULL, 'Intermediario','Compreendendo os Finais'),
(NULL, 'Intermediario','Vencendo com Táticas'),
(NULL, 'Intermediario','Lances forçados'),
(NULL, 'Intermediario','Lendo o tabuleiro'),
(NULL, 'Avancado','Aberturas Chave'),
(NULL, 'Avancado','Escolha o Melhor Lance'),
(NULL, 'Avancado','Ativando as Suas Peças'),
(NULL, 'Avancado','Finais Avançados'),
(NULL, 'Avancado','Atacando o Rei'),
(NULL, 'Avancado','Táticas Avançadas'),
(NULL, 'Avancado','Padrões de Finais');

SELECT * FROM quizes;
SELECT * FROM aulas;

/* INSERINDO RESPOSTA DO USUARIO  */
INSERT INTO respostas VALUES 
(NULL, 5, 5, 1, 1);

INSERT INTO assistidas VALUES 
(NULL, 3, 9, 1);

/* PEGAR RELATÓRIO DE ACERTOS E ERROS */
SELECT * FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
JOIN quizes ON respostas.fkQuiz = quizes.idQuiz WHERE usuario.idUsuario = 1;

/* PEGAR RELATÓRIO DE AULAS ASSISTIDAS */
SELECT * FROM assistidas JOIN usuario ON assistidas.fkUsuario = usuario.idUsuario 
JOIN aulas ON assistidas.fkAula = aulas.idAula WHERE usuario.idUsuario = 1;

/* INSERINDO RESPOSTA DO MESMO USUARIO NO MESMO QUIZ INSERIDO ANTERIORMENTE*/
INSERT INTO respostas VALUES 
(NULL, 5, 7, 1, 1);

/* INSERINDO RESPOSTA DO MESMO USUARIO EM UM QUIZ DIFERENTE */
INSERT INTO respostas VALUES 
(NULL, 5, 7, 2, 1);

/* PEGAR RELATÓRIO DE ACERTOS E ERROS INDEPENDENTE DE QUANTAS VEZES O USUARIO FEZ O QUIZ E QUAL QUIZ*/
SELECT (sum(acertos)) AS 'Acertos', (sum(erros)) AS 'Erros' FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
JOIN quizes ON respostas.fkQuiz = quizes.idQuiz WHERE usuario.idUsuario = 1;

SELECT (sum(acertos)) AS 'Acertos', (sum(erros)) AS 'Erros' FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
JOIN quizes ON respostas.fkQuiz = quizes.idQuiz WHERE usuario.idUsuario = 1;

SELECT * FROM usuario;

SELECT sum(acertos) AS 'Acertos', sum(erros) AS 'Erros', usuario.username, sum(acertos) / (sum(acertos) + sum(erros)) FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
JOIN quizes ON respostas.fkQuiz = quizes.idQuiz GROUP BY usuario.username ORDER BY 4 DESC;

/* PEGAR RELATÓRIO DE QUANTAS AULAS FORAM ASSISTIDAS EM CADA TIPO*/
SELECT aulas.tipo, SUM(assistidas.qtdAulas) AS totalAulas
FROM assistidas
JOIN aulas ON assistidas.fkAula = aulas.idAula
WHERE assistidas.fkUsuario = 1
GROUP BY aulas.tipo;


/* PEGAR ID DE QUAIS AULAS FORAM ASSISTIDAS DEVOLVENDO O ID*/
SELECT aulas.idAula, SUM(assistidas.qtdAulas) AS totalAulas
FROM assistidas
JOIN aulas ON assistidas.fkAula = aulas.idAula
WHERE assistidas.fkUsuario = 1
GROUP BY aulas.idAula;


/* DELETAR AULA ASSISTIDA (NAO FOI ASSISTIDA) */

DELETE FROM assistidas WHERE fkAula = 1 AND fkUsuario = 1;






