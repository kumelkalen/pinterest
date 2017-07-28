var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
//Tareas
gulp.task('script',function(){
	gulp.src(['node_modules/jquery/dist/jquery.js','assets/js/*.js'])
		.pipe(concat('script.js'))
		//carpeta
		.pipe(gulp.dest('dist/js/'));
});
//mini css
gulp.task('style',function(){
	gulp.src(['assets/sass/main.scss'])
		.pipe(sass().on('error', sas.logError))
		.pipe(minifyCSS());
		.pipe(concat('style.min.css'));
		//carpeta
		.pipe(gulp.dest('dist/css/'));
});
//server
gulp.task('webserver', function(){
	gulp.src('../pinterest/')
		.pipe(webserver({
		fallback: 'index.html',
		livereload: true,
		directoryListening: false,
		open: true
		}));
});
// tareas a ejecutar
gulp.task('default', ['script','style','webserver']);