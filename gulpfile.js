var gulp = require('gulp');
var parametros = require('./parametros.js');

var gutil = require('gulp-util');

// Coffee
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');

gulp.task('coffee-producao', function() {
    gulp
        .src(parametros.scripts + '/*.coffee')
        .pipe(coffee({ bare: true}))
        .pipe(gulp.dest(parametros.producao + '/js'))
        .on('error', function () { gutil.log(); });
});


// Minificar JS
var uglify = require('gulp-uglify');

gulp.task('minify', ['coffee-producao'], function() {
    gulp
        .src(parametros.producao + '/js/**.js')
        .pipe(uglify({ outSourceMap: true}))
        .pipe(gulp.dest(parametros.producao + '/js'))
        .on('error', function () { gutil.log(); });
});


// Jade
var jade = require('gulp-jade');

gulp.task('jade-producao', function() {
    gulp
        .src(parametros.templates + '/*.jade')
        .pipe(jade({ pretty: true}))
        .pipe(gulp.dest(parametros.producao))
        .on('error', function () { gutil.log(); });
});


// Sass
var sass = require('gulp-ruby-sass');

gulp.task('sass-producao', function () {
    gulp
        .src(parametros.arquivo_base_sass)
        .pipe(sass({ sourcemap: true, sourcemapPath: '.' }))
        .pipe(gulp.dest(parametros.producao + '/css'))
        .on('error', function () { gutil.log(); });
});


// Imagens
gulp.task('imagens-producao', function() {
    gulp
        .src(parametros.recursos + '/imagens/**')
        .pipe(gulp.dest(parametros.producao + '/imagens'))
        .on('error', function () { gutil.log(); });
});


/* COMANDOS DO CONSOLE E TASKS QUE AGREGAM */


// Default, ou seja: observar os arquivos
gulp.task('default', function() {
    gulp.watch(parametros.recursos + '/**/*.coffee', ['coffee-producao']);
    gulp.watch(parametros.recursos + '/**/*.sass', ['sass-producao']);
    gulp.watch(parametros.recursos + '/*.jade', ['jade-producao']);
});
