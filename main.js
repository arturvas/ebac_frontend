function Filme(titulo) {
  this.titulo = titulo;
  this.tituloFilme = function () {
    console.log(`Filme selecionado: ${this.titulo}`);
  };
}

function NotaIMDB(avaliacao) {
  this.avaliacao = avaliacao;
  this.dizNota = function () {
    console.log(`Nota IMDB: ${this.avaliacao}/10`);
  };
}

function InfoFilme(
  titulo,
  anoLancamento,
  duracao,
  diretor,
  premios,
  indicacoes,
  avaliacao
) {
  this.anoLancamento = anoLancamento;
  this.duracao = duracao;
  this.diretor = diretor;
  this.premios = premios;
  this.indicacoes = indicacoes;
  this.avaliacao = avaliacao;

  Filme.call(this, titulo);
  NotaIMDB.call(this, avaliacao);

  // funcao para transformar minutos em horas e minutos.
  this.formataDuracao = function () {
    let duracaoHoras = Math.floor(this.duracao / 60);
    let duracaoMinutos = this.duracao % 60;

    let resultado = duracaoHoras + "h";
    // aqui se os minutos resultarem em 0, o mesmo nao sera exibido.
    if (duracaoMinutos > 0) {
      resultado += ` ${duracaoMinutos.toFixed(0)}min`;
    }
    console.log(`Duração: ${resultado}`);
  };
}

const filme1 = new InfoFilme(
  "Shichinin no Samurai",
  1954,
  207,
  "Akira Kurosawa",
  4,
  6,
  8.6
);

const filme2 = new InfoFilme(
  "A Man for All Seasons",
  1967,
  120,
  "Fred Zinnemann",
  33,
  6,
  7.7
);

const filme3 = new InfoFilme(
  "Rear Window",
  1954,
  112,
  "Alfred Hitchcock",
  5,
  8,
  8.5
);

const filme4 = new InfoFilme(
  "The Tragedy of Macbeth",
  2021,
  105,
  "Joel Coen",
  2,
  12,
  7.1
);

console.log(filme1);
filme1.tituloFilme();
filme1.formataDuracao();
filme1.dizNota();

console.log("  ");

console.log(filme2);
filme2.tituloFilme();
filme2.formataDuracao();
filme2.dizNota();
