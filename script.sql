CREATE DATABASE booschess;

USE booschess;

CREATE TABLE quiz1 (
idQuiz1 INT PRIMARY KEY AUTO_INCREMENT,
acertos VARCHAR(45),
erros VARCHAR(45)
);

CREATE TABLE quiz2 (
idQuiz2 INT PRIMARY KEY AUTO_INCREMENT,
acertos VARCHAR(45),
erros VARCHAR(45)
);

CREATE TABLE quiz3 (
idQuiz3 INT PRIMARY KEY AUTO_INCREMENT,
acertos VARCHAR(45),
erros VARCHAR(45)
);

CREATE TABLE usuario(
idUsuario INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45),
email VARCHAR(45),
username VARCHAR(45),
senha VARCHAR(45),
fkQuiz1 INT,
foreign key (fkQuiz1) references quiz1(idQuiz1),
fkQuiz2 INT,
foreign key (fkQuiz2) references quiz2(idQuiz2),
fkQuiz3 INT, 
foreign key (fkQuiz3) references quiz3(idQuiz3)
);

/* USUARIO LOGOU */
INSERT INTO usuario(nome, username, email, senha) VALUES
('Gabriel', 'gabrielBoos5' ,'gabriel.bduarte@sptech.school', '123456');

SELECT * FROM usuario;

/* USUARIO FEZ O QUIZ1 */
INSERT INTO quiz1(acertos, erros) VALUES
(5, 5);

SELECT * FROM quiz1;

/* SISTEMA PEGA O ID DO QUIZ QUE O USÚARIO FEZ E MUDA O FKQUIZ DO USUÁRIO */
UPDATE usuario SET fkquiz1 = 1 WHERE idUsuario = 1;

/* JOIN PARA PEGAR O RELATÓRIO DE ACERTOS NO QUIZ DO USUÁRIO */
SELECT * FROM usuario JOIN quiz1 ON fkQuiz1 = idQuiz1;



