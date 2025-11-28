const form = document.getElementById('meuFormulario');
form.addEventListener('submit' , function(event) {
event.preventDefault();
validaFormulario();
});
 
function validaFormulario() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('corfirmaSenha').value;
    let mensagemErro ='';

    if (!email) {
        mensagemErro += 'Email é obrigatório./n';
        }else if (!/^\S+@\S+\.\S=$/.test(email)) {
            mensagemErro += 'Email inválido.\n';
   }} 
if (senha.length < 8) {
    mensagemErro += 'A senha deve ter pelo menos 8 caracteres.\n';
}
if (senha !== confirmarSenha) {
    mensagemErro += 'as senhas não coincidem.\n';
}
if (mensagemErro) {
    document.getElementById('mensagemErro').textContent = mensagemErro;
    return false;
    } else {
        alert('formulário validado com sucesso!')
}