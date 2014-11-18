var gulp = require('gulp');
var parametros = require('./parametros.js');


var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var jade = require('gulp-jade');

// Coffee
gulp.task('coffee', function() {
    gulp
        .src(parametros.scripts + '/*.coffee')
        .pipe(plumber())
        .pipe(coffee({ bare: true}))
        .pipe(plumber.stop())
        .pipe(gulp.dest(parametros.desenvolvimento + '/js'))
        .on('error', function () { gutil.log(); });
});


// Minificar JS
gulp.task('minify', ['coffee'], function() {
    gulp
        .src(parametros.desenvolvimento + '/js/**.js')
        .pipe(plumber())
        .pipe(uglify({ outSourceMap: true}))
        .pipe(plumber.stop())
        .pipe(gulp.dest(parametros.producao + '/js'))
        .on('error', function () { gutil.log(); });
});


// Sass
gulp.task('sass', function () {
    gulp
        .src(parametros.arquivo_base_sass)
        .pipe(plumber())
        .pipe(sass({ sourcemap: true, sourcemapPath: '.' }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(parametros.desenvolvimento + '/css'))
        .on('error', function () { gutil.log(); });
});


// Minificar CSS
gulp.task('minificar-css', function() {
  gulp.src(parametros.desenvolvimento + '/css/*.css')
    .pipe(plumber())
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(plumber.stop())
    .pipe(gulp.dest(parametros.producao + '/css'))
    .on('error', function () { gutil.log(); });
});


// Jade
gulp.task('jade', function() {
    gulp
        .src(parametros.templates + '/*.jade')
        .pipe(plumber())
        .pipe(jade({ pretty: true}))
        .pipe(plumber())
        .pipe(gulp.dest(parametros.desenvolvimento))
        .on('error', function () { gutil.log(); });
});


// Imagens
gulp.task('imagens', function() {
    gulp
        .src(parametros.recursos + '/imagens/**')
        .pipe(gulp.dest(parametros.desenvolvimento + '/imagens'))
        .on('error', function () { gutil.log(); });
});


// Monitorar, ou seja: observar os arquivos
gulp.task('monitorar', function() {
    gulp.watch(parametros.recursos + '/**/*.coffee', ['coffee']);
    gulp.watch(parametros.recursos + '/**/*.sass', ['sass']);
    gulp.watch(parametros.recursos + '/**/*.jade', ['jade']);
    gulp.watch(parametros.recursos + '/*', ['imagens']);

});


// Compilar para desenvolvimento
gulp.task('compilar-desenvolvimento', function() {
    runSequence('coffee', 'sass', 'jade', 'imagens');
});
