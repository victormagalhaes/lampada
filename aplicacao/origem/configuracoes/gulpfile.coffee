gulp = require 'gulp'
parametros = require './parametros.coffee'


# Coffee
coffee  = require 'gulp-coffee'
concat  = require 'gulp-concat'
gutil   = require 'gulp-util'

gulp.task 'coffee-producao', ->
    gulp.src parametros.scripts + '/*.coffee'
    .pipe coffee bare: true
    .pipe concat parametros.arquivo_final_script
    .pipe gulp.dest parametros.producao + '/js'
    .on 'error', gutil.log


# Jade
jade    = require 'gulp-jade'

gulp.task 'jade-producao', ->
    gulp.src parametros.templates + '/*.jade'
    .pipe jade pretty: true
    .pipe gulp.dest parametros.producao
    .on 'error', gutil.log


# Sass
sass    = require 'gulp-sass'

gulp.task 'sass-producao', ->
    gulp.src parametros.arquivo_base_sass
    .pipe sass()
    .pipe gulp.dest parametros.producao + '/css'
    .on 'error', gutil.log


# Minificar JS
uglify  = require 'gulp-uglify'

gulp.task 'minify', ['coffee-producao'], ->
    gulp.src parametros.producao + '/js/**.js'
    .pipe uglify outSourceMap: true
    .pipe gulp.dest parametros.producao + '/js'
    .on 'error', gutil.log


# Copiar outros recursos (imagens, fontes, etc)

gulp.task 'outros-recursos', ->
    gulp.src parametros.recursos + '/**'
    .pipe gulp.dest parametros.producao
    .on 'error', gutil.log
