var gulp        = require('gulp');
var babel       = require('gulp-babel');
var del         = require('del');


var clean = function () {
    return del('lib');
};

var lint = function () {
    var eslint = require('gulp-eslint');

    return gulp
        .src([
            'src/**/*.js',
            'test/**/*.js',
            'Gulpfile.js'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
};

var build = function () {
    return gulp
        .src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
};

gulp.task('clean', clean);
gulp.task('lint', lint);
gulp.task('build', gulp.series(lint, clean, build));
