const gulp = require( 'gulp' ),
      concat = require( 'gulp-concat' ),
      sass = require( 'gulp-sass' );

sass.compiler = require( 'node-sass' );

const cssFiles = [
  './source/scss/**/*.scss'
];

const jsFiles = [
  './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  './node_modules/@fortawesome/fontawesome-free/js/all.min.js',
  './source/js/**/*.js'
]

gulp.task( 'sass', function () {
  return gulp.src( cssFiles )
    .pipe( sass() )
    .pipe( concat( 'screen.css' ) )
    .pipe( gulp.dest( './build/css' ) );
} );

gulp.task( 'js', function() {
  return gulp.src( jsFiles )
        .pipe( concat( 'scripts.min.js' ) )
        .pipe( gulp.dest( './build/js' ) );

});

gulp.task( 'build', gulp.series( 'sass', 'js' ) );
