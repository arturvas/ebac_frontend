// module.exports = variavel
// function = definindo funcao
// (grunt) = argumento da função

// Exporta uma função que será executada quando o Grunt for iniciado,
// recebendo o objeto 'grunt' como argumento.
module.exports = function (grunt) {
  // Inicializa as configurações do Grunt.
  grunt.initConfig({
    // Lê o arquivo package.json para obter informações sobre o projeto.
    pkg: grunt.file.readJSON("package.json"),
    // Configuração da tarefa 'less' para compilar arquivos LESS em CSS (development).
    less: {
      development: {
        files: {
          "dev/styles/main.css": "src/styles/main.less", // Define a saída do CSS.
        },
      },
      // Configuração da tarefa 'less' para compilar arquivos LESS em CSS (production).
      production: {
        // Define opções específicas para a compilação em modo produção.
        options: {
          compress: true, // Habilita a compressão do CSS.
        },
        files: {
          "dist/styles/main.min.css": "src/styles/main.less", // Define o nome do arquivo de saída minificado.
        },
      },
    },
    // Configuração da tarefa 'uglify' para minificar o arquivo JavaScript.
    uglify: {
      target: {
        files: {
          // Define o arquivo JavaScript de origem (src/scripts/main.js) e o arquivo de destino minificado (dist/scripts/main.min.js).
          "dist/scripts/main.min.js": "src/scripts/main.js",
        },
      },
    },
  });

  // Carrega o plugin 'grunt-contrib-less' para compilação de arquivos LESS em CSS.
  grunt.loadNpmTasks("grunt-contrib-less");

  // Carrega o plugin 'grunt-contrib-uglify' para minificar arquivos JavaScript.
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Registra a tarefa padrão 'default', que depende da tarefa 'less'.
  grunt.registerTask("default", ["watch"]);

  // Registra a tarefa personalizada 'build' que consiste em várias sub-tarefas.
  grunt.registerTask("build", [
    "less:production", // Compila arquivos LESS em CSS minificado.
    "uglify", // Minifica o arquivo JavaScript.
  ]);
};
