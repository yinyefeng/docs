var fs = require("fs");
var path = require("path");
var gulp = require("gulp");
var minify = require("gulp-minifier");
var rimraf = require("rimraf");
var rename = require("gulp-rename");
var replace = require("gulp-replace");
var runSequence = require("run-sequence");
var run = require('gulp-run');

var build = function(dir) {
  return run('gitbook build ' + dir)
    .exec()
    .pipe(gulp.dest('output'));
}

var copy = function(dir) {
  return gulp
    .src(["./getting-started/_book/**/*"])
    .pipe(gulp.dest("./docs/getting-started"));
}

gulp.task("build-getting-started", function() {
  return build('getting-started');
});

gulp.task("copy-getting-started", function() {
  return copy('getting-started');
});

gulp.task("index-html", function() {
  return gulp
  .src('index.html')
  .pipe(gulp.dest("./docs"));
});

gulp.task("index-assets", function() {
  return gulp
  .src(['assets/**/*'])
  .pipe(gulp.dest("./docs/assets"));
});

gulp.task("build", function(callback) {
  runSequence(
    "build-getting-started",
    "copy-getting-started",
    "index-assets",
    "index-html"
  );
});