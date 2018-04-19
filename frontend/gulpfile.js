const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');


gulp.task('translate', function() {
    return gulp.src('app/**/*.js')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('/dist'));
});

gulp.task('sass', function() {
    return gulp.src('app/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('/dist'));
})

gulp.task('default', function() {
    return gulp.src('src/entry.js')
        .pipe(webpack({
            
        }))
        .pipe(gulp.dest('dist/'));
});