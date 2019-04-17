var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')

sass.compiler = require('node-sass')

gulp.task('hello', function(done) {
    console.log('hello')
    done()
})

gulp.task('sass', function(done) {
    return gulp.src('style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
    done()
})

gulp.task('sass:watch', function(done) {
    gulp.watch('style.scss', gulp.series('sass'))
    done()
})
