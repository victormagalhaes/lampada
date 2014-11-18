var gulp = require('gulp');
var parametros = require('./parametros.js');


var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');


// Coffee
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');

gulp.task('coffee', function() {
    return gulp
        .src(parametros.scripts + '/*.coffee')
        .pipe(plumber())
        .pipe(coffee({ bare: true}))
        .pipe(plumber.stop())
        .pipe(gulp.dest(parametros.producao + '/js'))
        .on('error', function () { gutil.log(); });
});


// Minificar JS
var uglify = require('gulp-uglify');

gulp.task('minify', ['coffee'], function() {
    return gulp
        .src(parametros.producao + '/js/**.js')
        .pipe(plumber())
        .pipe(uglify({ outSourceMap: true}))
        .pipe(plumber.stop())
        .pipe(gulp.dest(parametros.producao + '/js'))
        .on('error', function () { gutil.log(); });
});


// Sass
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp
        .src(parametros.arquivo_base_sass)
        .pipe(plumber())
        .pipe(sass({ sourcemap: false, sourcemapPath: '.' }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(parametros.desenvolvimento + '/css'))
        .on('error', function () { gutil.log(); });
});


// Minificar CSS
var minifyCSS = require('gulp-minify-css');

gulp.task('minificar-css', function() {
  return gulp.src(parametros.desenvolvimento + '/css/*.css')
    .pipe(plumber())
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(plumber.stop())
    .pipe(gulp.dest(parametros.producao + '/css'))
    .on('error', function () { gutil.log(); });
});


// Jade
var jade = require('gulp-jade');

gulp.task('jade', function() {
    return gulp
        .src(parametros.templates + '/*.jade')
        .pipe(plumber())
        .pipe(jade({ pretty: true}))
        .pipe(plumber())
        .pipe(gulp.dest(parametros.desenvolvimento))
        .on('error', function () { gutil.log(); });
});


// Imagens
gulp.task('imagens', function() {
    return gulp
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
    runSequence(['coffee', 'sass', 'jade', 'imagens']);
});
