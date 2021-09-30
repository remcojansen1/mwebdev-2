const gulp = require('gulp');
const cat = require('gulp-cat');
const minifyhtml = require('gulp-minify-html');


//test versie 3
// gulp.task('hallo', function(done){
//     console.log('hallo gulp file');
//     done();
// });


//test versie 4
// function hallo(){
//     return console.log('hallo gulp file versie 4');
// };

// exports.default = hallo;



// //copy images
// gulp.task('copy-img', function(done){
//     gulp.src('./images/*.jpg')
//         .pipe(gulp.dest('public/images/'));
//     done();
//});


//gulp plugin
// gulp.task('ascii', function(done) {
//     gulp.src('./tekst/mier.txt')
//         .pipe(cat());
//     done();
// });


// minify HTML
// gulp.task('minify-html', function(done){
//     gulp.src('./*.html')
//         .pipe(minifyhtml())
//         .pipe(gulp.dest('./public'));
//     done();

// });


//watch css
gulp.task('watch', function(done){
    gulp.watch('./css/*.css').on('change',function(file){
        gulp.src('./css/*.css')
            .pipe(gulp.dest('./public/css'));
        console.log('css-bestand gekopiëerd.')
        done();
    })
});