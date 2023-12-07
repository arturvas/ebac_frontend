function Filme(titulo) {
  this.titulo = titulo;
  this.filmeSelecionado = function () {
    console.log(`Filme selecionado: ${this.titulo}`);
  };
}

function InfoFilme(
  titulo,
  anoLancamento,
  duracao,
  diretor,
  premios,
  indicacoes
) {
  Filme.call(this, titulo);
  this.anoLancamento = anoLancamento;
  this.duracao = duracao;
  this.diretor = diretor;
  this.premios = premios;
  this.indicacoes = indicacoes;

  this.formataDuracao = function () {
    let duracaoHoras = Math.floor(this.duracao / 60);
    let duracaoMinutos = (this.duracao / 60 - duracaoHoras) * 100;

    if (duracaoMinutos >= 60) {
      duracaoHoras = duracaoHoras + 1;
      duracaoMinutos = duracaoMinutos - 60;
    }

    const resultado = duracaoHoras + "h" + duracaoMinutos.toFixed(0);
    console.log(resultado);
  };
}

const filme1 = new InfoFilme(
  "Shichinin no Samurai",
  1954,
  207,
  "Akira Kurosawa",
  4,
  6
);

const filme2 = new InfoFilme(
  "A Man for All Seasons",
  1967,
  120,
  "Fred Zinnemann",
  33,
  6
);
const filme3 = new InfoFilme(
  "Rear Window",
  1954,
  112,
  "Alfred Hitchcock",
  5,
  8
);
const filme4 = new InfoFilme(
  "The Tragedy of Macbeth",
  2021,
  105,
  "Joel Coen",
  2,
  12
);

console.log(filme1);
filme1.formataDuracao();

filme2.formataDuracao();
filme3.formataDuracao();
filme4.formataDuracao();
