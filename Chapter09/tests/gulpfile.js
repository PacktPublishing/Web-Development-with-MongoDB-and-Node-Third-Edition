const gulp = require('gulp');
const gulpMocha = require('gulp-mocha')


gulp.task('test-helper',()=>gulp.src('./testhelper.js'))

gulp.task('test-server', ['test-helper'],()=>{
  return gulp.src('./server/server.test.js')
  .pipe(gulpMocha({ reporter: 'spec' }))
});

gulp.task('test-routes', ['test-helper', 'test-server'],()=>{
  return gulp.src('./server/routes.test.js')
  .pipe(gulpMocha())
});

gulp.task('build', ['test-helper', 'test-server','test-routes'])
