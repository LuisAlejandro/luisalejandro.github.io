require('./clean');
require('./jekyll');
require('./images');
require('./sounds');
require('./fonts');
require('./styles');
require('./scripts');
require('./base64');
require('./favicons');
require('./optimize-json');
require('./optimize-xml');
require('./optimize-images');
require('./optimize-html');
require('./optimize-css');
require('./optimize-js');
require('./revision');
require('./rev-collector');
require('./svgstore');
require('./garbage');
require('./lint-xml');
require('./lint-json');

const gulp = require('gulp');

// Run all tasks needed for a build, in defined order
gulp.task('build:production',
  gulp.series(
    'clean:production',
    gulp.parallel(
      'jekyll:production',
      'images:production',
      'sounds:production',
      'fonts:production',
      'styles:production',
      'scripts:production'
    ),
    'base64:production',
    'favicons:production',
    gulp.parallel(
      'optimize:json',
      'optimize:xml',
      'optimize:images',
      'optimize:html',
      'optimize:css',
      'optimize:js'
    ),
    'revision',
    'rev:collect',
    'svgstore:production',
    'garbage:production',
    gulp.parallel(
      'lint-xml',
      'lint-json'
    )
  )
);
