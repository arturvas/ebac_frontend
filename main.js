/**
  A entrega deste exercício consiste em:
  
  • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
  
  • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
  
  • Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma.
*/

const alunos = [
  { nome: "artur", nota: 7 },
  { nome: "sara", nota: 9 },
  { nome: "lucas", nota: 8 },
  { nome: "irineu", nota: 4 },
];

function alunosAprovados(arrayAlunos) {
  return arrayAlunos.filter((aluno) => aluno.nota >= 6);
}

console.log(alunosAprovados(alunos));
