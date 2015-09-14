
var gulp = require('gulp')
var riot = require('gulp-riot')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var run = require('run-sequence')

gulp.task('default', ['build'])

gulp.task('build', function (callback) {
	run('build-riot', 'build-js', 'build-minify', callback)
})

gulp.task('build-riot', function() {
	var files = ['./components/*.tag']
	return gulp.src(files)
		.pipe(riot())
		.pipe(gulp.dest('./components'))
})

gulp.task('build-js', function() {
	var files = ['./components/*.js', 'mixins/*.js']
	return gulp.src(files)
		.pipe(concat('riot-booster.js'))
		.pipe(gulp.dest('./dist'))
})

gulp.task('build-minify', function() {
	return gulp.src('./dist/riot-booster.js')
		.pipe(uglify({}))
		.pipe(rename('riot-booster.min.js'))
		.pipe(gulp.dest('./dist'))
})

