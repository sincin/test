var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    jshint = require("gulp-jshint"),
    less = require('gulp-less'),
    concat = require('gulp-concat');
    minifyCSS = require('gulp-minify-css'),
    watch = require('gulp-watch'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    livereload = require('gulp-livereload'),
    minifyHtml = require('gulp-minify-html'),
    connect = require('gulp-connect');
gulp.task('scripts', function(){
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('./bulid/js'))
        .pipe(livereload());
});
gulp.task('less', function () {
    return gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('./bulid/css'))
        .pipe(livereload());
});
gulp.task('pic', function () {
    return gulp.src('./src/images/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //使用pngquant来压缩png图片
        }))
        .pipe(gulp.dest('./bulid/images'))
        .pipe(livereload());
});
gulp.task('html', function () {
    return gulp.src('./src/html/*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('./bulid/html'))
        .pipe(livereload());
});
gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        port: 2333,
        host:'192.168.2.110'
    });
});
gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('./src/js/*.js',['scripts']);
    gulp.watch('./src/less/*.less',['less']);
    gulp.watch('./src/images/*',['pic']);
    gulp.watch('./src/html/*.html',['html']);

});
gulp.task('default', ['webserver','scripts','less','pic','watch']);