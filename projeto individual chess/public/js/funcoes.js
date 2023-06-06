function sair(){
    sessionStorage.removeItem('ID_USUARIO');
    sessionStorage.removeItem('fk_EMPRESA');
    sessionStorage.removeItem('NOME_USUARIO');
    sessionStorage.removeItem('EMAIL_USUARIO');
    sessionStorage.removeItem('CNPJ_EMPRESA');
    sessionStorage.removeItem('NOME_EMPRESA');
    sessionStorage.removeItem('ID_EMPRESA');
}