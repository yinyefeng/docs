var fs = require("fs");
var path = require("path");
var gulp = require("gulp");
var minify = require("gulp-minifier");
var rimraf = require("rimraf");
var rename = require("gulp-rename");
var replace = require("gulp-replace");
var runSequence = require("run-sequence");
var child_process = require('child_process');

gulp.task("index-html", function () {
  return gulp
    .src('index.html')
    .pipe(gulp.dest("./docs"));
});

gulp.task("index-assets", function () {
  return gulp
    .src(['assets/**/*'])
    .pipe(gulp.dest("./docs/assets"));
});

var install = function (dir) {
  child_process.execSync('gitbook install ' + dir, {stdio:[0,1,2]});
}

var build = function (dir) {
  child_process.execSync('gitbook build ' + dir, {stdio:[0,1,2]});
}

var copy = function (dir) {
  gulp
    .src(["./" + dir + "/_book/**/*"])
    .pipe(gulp.dest("./docs/" + dir + ""));
  console.log(dir + ' build completed');
}

// gitbook main

gulp.task("build-faq", function () {
  install('faq');
  build('faq');
  copy('faq');
});

gulp.task("build-getting-started", function () {
  install('getting-started');
  build('getting-started');
  copy('getting-started');
});

gulp.task("build-introduction", function () {
  install('introduction');
  build('introduction');
  copy('introduction');
});

gulp.task("build-working-with-plugins", function () {
  install('working-with-plugins');
  build('working-with-plugins');
  copy('working-with-plugins');
});

gulp.task("build-working-with-siteserver-cms", function () {
  install('working-with-siteserver-cms');
  build('working-with-siteserver-cms');
  copy('working-with-siteserver-cms');
});

gulp.task("build", function (callback) {
  runSequence(
    "index-assets",
    "index-html",
    "build-faq",
    "build-getting-started",
    "build-introduction",
    "build-working-with-plugins",
    "build-working-with-siteserver-cms"
  );
});