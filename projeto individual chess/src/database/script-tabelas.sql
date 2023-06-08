CREATE DATABASE booschess;

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
 
 
/* USUARIO LOGOU */
INSERT INTO usuario(nome, username, email, senha) VALUES
('Gabriel', 'gabrielBoos5' ,'gabriel.bduarte@sptech.school', '123456');

INSERT INTO usuario(nome, username, email, senha) VALUES ('teste', 'roberto' ,'gabriel.bduarte@sptech.school', '123456');


SELECT * FROM usuario;
SELECT * FROM usuario WHERE username = 'gabriel' OR email = 'gabriel' OR nome = 'gabriel';
SELECT * FROM respostas WHERE fkUsuario  = 1;


/* CADASTRANDO OS QUIZES */
INSERT INTO quizes VALUES
(NULL, 'iniciante'),
(NULL, 'intermediario'),
(NULL, 'profissional');

SELECT * FROM quizes;

/* INSERINDO RESPOSTA DO USUARIO  */
INSERT INTO respostas VALUES 
(NULL, 5, 5, 2, 1);

/* PEGAR RELATÓRIO DE ACERTOS E ERROS */
SELECT * FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
JOIN quizes ON respostas.fkQuiz = quizes.idQuiz WHERE usuario.idUsuario = 1;

/* INSERINDO RESPOSTA DO MESMO USUARIO NO MESMO QUIZ INSERIDO ANTERIORMENTE*/
INSERT INTO respostas VALUES 
(NULL, 5, 7, 1, 1);

SELECT * FROM respostas;

/* INSERINDO RESPOSTA DO MESMO USUARIO EM UM QUIZ DIFERENTE */
INSERT INTO respostas VALUES 
(NULL, 5, 7, 2, 2);

/* PEGAR RELATÓRIO DE ACERTOS E ERROS INDEPENDENTE DE QUANTAS VEZES O USUARIO FEZ O QUIZ E QUAL QUIZ*/
SELECT (sum(acertos)) AS 'Acertos', (sum(erros)) AS 'Erros' FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
JOIN quizes ON respostas.fkQuiz = quizes.idQuiz WHERE usuario.idUsuario= 2
;

/*FAZER UM RANKING DE MAIORES ACERTOS ENTRE TODOS OS USUÁRIOS*/
SELECT (acertos) AS 'Acertos', (erros) AS 'Erros', usuario.nome AS 'Nome', acertos / erros AS resultado FROM respostas JOIN usuario ON respostas.fkUsuario = usuario.idUsuario 
JOIN quizes ON respostas.fkQuiz = quizes.idQuiz ORDER BY resultado DESC;





