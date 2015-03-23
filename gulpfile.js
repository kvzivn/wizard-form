var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass'),
    reload      = browserSync.reload;

gulp.task('serve', ['sass'], function() {

    browserSync({
        server: "./"
    });

    gulp.watch("stylesheets/*.scss", ['sass']);
    gulp.watch("*.html").on('change', reload);
});

gulp.task('sass', function() {
    return gulp.src("stylesheets/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);