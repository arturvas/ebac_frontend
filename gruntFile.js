module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "dev/styles/main.css": "src/styles/main.less", // Arquivo de entrada e saída
        },
      },
      production: {
        options: {
          compress: true, // Comprimir o CSS
        },
        files: {
          "dist/styles/main.min.css": "src/styles/main.less", // Arquivo de entrada e saída
        },
      },
    },
    uglify: {
      target: {
        files: {
          // Define o arquivo JavaScript de origem (src/scripts/main.js) e o arquivo de destino minificado (dist/scripts/main.min.js).
          "dist/scripts/main.min.js": "src/script/main.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["less:development"]);
  grunt.registerTask("build", [
    "less:production", // Compila arquivos LESS em CSS minificado.
    "uglify", // Minifica o arquivo JavaScript.
  ]);
};
