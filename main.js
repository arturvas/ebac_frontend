const form = document.getElementById('form-validacao');//constante para remover a necessidade de update do navegador
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e) { //sera disparado quando um evento do tipo 'submit' acontecer no form
    const campoA = parseInt(document.getElementById('campo-a').value); //parseInt converte para numero intero
    const campoB = parseInt(document.getElementById('campo-b').value);
    e.preventDefault(); // interrompe o envio do formulário
    
    if (campoA <= campoB) {
        mensagem.textContent = 'Formulário enviado com sucesso!';
        mensagem.classList.add('sucesso');
        mensagem.classList.remove('erro');
    } else {
        mensagem.textContent = 'Erro! O Valor B deve ser maior que o Valor A!';
        mensagem.classList.add('erro');
        mensagem.classList.add('sucesso');
    }
});
console.log(form); //mostrar no console, a constante