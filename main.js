/*

$(document).ready(function(){
    console.log(document.querySelector('form button'));
})

*/

$(document).ready(function() { // espera o documento HTML carregar completamente antes de executar o jQuery
    $('form').on('submit', function(e) { 
        e.preventDefault(); // evita que o envio padrão do formulário ocorra e a página seja recarregada.
        const campoTarefa = $('#campo-tarefa').val(); // seleciona o campo de entrada de tarefas e salva seu valor em uma constante
        $('<li>').text(campoTarefa).appendTo('ul'); // cria um novo elemento li e adiciona o texto da tarefa como seu conteúdo, em seguida, o adiciona ao final da lista.
        $('#campo-tarefa').val(''); // limpa o campo de entrada de tarefas após adicionar uma tarefa
    })
    $('ul').on('click', 'li', function(){ // adiciona um evento de clique a elementos li que estão dentro de um elemento ul
        $(this).toggleClass('riscado'); // adiciona ou remove a classe 'riscado' ao elemento li atualmente clicado.
    })
})