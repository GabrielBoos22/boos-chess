function validarSessao() {
    var usuario = sessionStorage.ID_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (usuario == null && nome == null) {
        window.location = "../login.html";
    } 
}

function sair(){
    sessionStorage.removeItem('ID_USUARIO');
    sessionStorage.removeItem('fk_EMPRESA');
    sessionStorage.removeItem('NOME_USUARIO');
    sessionStorage.removeItem('EMAIL_USUARIO');
    sessionStorage.removeItem('CNPJ_EMPRESA');
    sessionStorage.removeItem('NOME_EMPRESA');
    sessionStorage.removeItem('ID_EMPRESA');
}