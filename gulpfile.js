var gulp = require('gulp');
var jspm = require('jspm');

gulp.task('build', function() {
  var builder = new jspm.Builder();

  builder.reset(System);

  return builder.loadConfig('config.js')
    .then(function() {
      builder.config({
        // baseURL: 'build'
      });
      return builder.buildSFX('app/main.js', 'dist/app.js',
        {
          sourceMaps: false,
          minify: false,
          mangle: false
        });
    });
});