var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var minifyjs = require('gulp-js-minify');
var imagemin = require('gulp-imagemin');

 
gulp.task('styles', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('minify-html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function(){
    gulp.src('src/js/*.js')
      .pipe(minifyjs())
      .pipe(gulp.dest('dist/js'));
  });

gulp.task('images', function() {
gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
});

gulp.task('copy', function () {
    gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

gulp.task('build', ['styles', 'minify-html','minify-js','images'], function() {
    console.log('Building files...');
});

