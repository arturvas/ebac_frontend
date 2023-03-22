const form = document.getElementById('form-validacao');//constante para remover a necessidade de update do navegador
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e) { //sera disparado quando um evento do tipo 'submit' acontecer no form
    const campoA = parseInt(document.getElementById('campo-a').value); //parseInt converte para numero intero
    const campoB = parseInt(document.getElementById('campo-b').value);
    
    if (campoB <= campoA) {
        mensagem.textContent = 'Erro! O Valor B deve ser maior que o Valor A!';
        mensagem.classList.add('erro'); //adiciona css mensagem de erro
        mensagem.classList.remove('sucesso'); //remove css mensagem de erro
    } else {
        mensagem.textContent = 'Formulário enviado com sucesso!';
        mensagem.classList.add('sucesso');
        mensagem.classList.remove('erro');
    }
    e.preventDefault(); // interrompe o envio do formulário
});
console.log(form); //mostrar no console, a constante