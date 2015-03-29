// Requires
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var bust = require('gulp-buster');
var env = require('./env');
var filter = require('gulp-filter');
var gulp = require('gulp');
var gulp = require('gulp');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var reactify = require('reactify');
var reload = require('browser-sync').reload;
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var watchify = require('watchify');

// ### Sources / Destinations
var src = {
  js: ['src/js/**/*.js', 'src/js/**/*.jsx'],
  js_index: 'src/js/index.js',
  css: 'src/stylus/**/*.styl',
  css_index: 'src/stylus/index.styl'
};
var dest = {
  js: 'build/js',
  css: 'build/css'
};

// ## Environment

var env = {
  dev: function() {
    process.env.NODE_ENV === 'dev'
  },
  prod: function() {
    process.env.NODE_ENV === 'prod'
  }
};

// ## Subtasks
gulp.task('js', function() {
  function errorHandler(err) {
    throw err;
  }

  var bundler = browserify({
    entries: [src.js_index],
    cache: {},
    debug: true,
    fullPaths: true,
    insertGlobals: true,
    noParse: [
      'jquery',
      'moment'
    ],
    packageCache: {}
  });

  var rebundle = function(ids, done) {
    if (ids) {
      console.log('File changed: ' + ids[0]);
    }

    return bundler.bundle()
      .on('error', errorHandler)
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(gulpif(env.dev(), sourcemaps.init({loadMaps: true})))
      .pipe(gulpif(env.prod(), uglify()))
      .pipe(gulpif(env.dev(), sourcemaps.write('./')))
      .pipe(gulp.dest('./build/js/'))
      .pipe(gulpif(env.prod(), bust()))
      .pipe(gulpif(env.prod(), gulp.dest('.')))
      .pipe(browserSync.reload({stream: true}));
  }

  if (env.dev()) {
    bundler = watchify(bundler);
    bundler.on('update', rebundle);
  }

  return rebundle();
});

gulp.task('css', function() {
  gulp.src(src.css_index)
    .pipe(gulpif(env.dev(), plumber()))
    .pipe(gulpif(env.dev(), sourcemaps.init()))
    .pipe(stylus())
    .pipe(gulpif(env.dev(), sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: 'src/css'
    })))
    .pipe(gulp.dest(dest.css))
    .pipe(filter('**/*.css'))
    .pipe(reload({stream: true}));
});

// ## Main tasks

// Build task
gulp.task('build', function() {

});

// Watch task
gulp.task('watch', function() {
  gulp.watch(src.js, ['js']);
  gulp.watch(src.css, ['css']);
});

// Default task
gulp.task('default', ['build', 'watch']);
