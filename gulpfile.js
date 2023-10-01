/* Comentários

#métodos
- 'src' -> recebe como parametro os arquivos e as pastas do codigo sass;
- 'pipe' -> tem as papel de encadear as funções;
- 'dest' -> para onde os arquivos seram destinados.

#Função
- soucemaps.write -> criar o arquivo de maepamento
*/

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass")); // pacote 'gulp-sass' é responsável por integrar o sass com o gulp // e 'sass' que fará toda a compilação
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify"); // pacote 'gulp-uglify' responsavel por comprimir os arquivos
const imagemin = require("gulp-imagemin"); // pacote 'gulp-imagemin' para comprimir imagens

function comprimeImagens() {
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

function comprimeJavaScript() {
  return gulp
    .src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/scripts"));
}

function compliaSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

exports.default = function () {
  gulp.watch(
    "./source/styles/*.scss",
    { ignoreInitial: false },
    gulp.series(compliaSass)
  );
  gulp.watch(
    "./source/scripts/*.js",
    { ignoreInitial: false },
    gulp.series(comprimeJavaScript)
  );
  gulp.watch(
    "./source/images/*",
    { ignoreInitial: false },
    gulp.series(comprimeImagens)
  );
};
