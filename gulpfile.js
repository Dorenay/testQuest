const gulp = require('gulp');
const livereload = require('gulp-livereload');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
let cleanCSS = require('gulp-clean-css');
var pump = require('pump');


gulp.task('sass', function () {
  gulp.src('src/scss/application.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('watch', ['sass', 'uglify'], function(){
  livereload.listen();

  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['uglify']);
  gulp.watch(['dist/application.css', 'dist/*.js'], function (files){
    livereload.changed(files)
  });
});

gulp.task('default', ['sass', 'uglify']);
