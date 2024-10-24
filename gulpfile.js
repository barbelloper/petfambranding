var gulp = require("gulp");
var plumber = require("gulp-plumber");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const wait = require("gulp-wait");
const babel = require("gulp-babel");
const rename = require("gulp-rename");

gulp.task("scripts", function () {
  return gulp
    .src("./js/scripts.js")
    .pipe(
      plumber(
        plumber({
          errorHandler: function (err) {
            console.log(err);
            this.emit("end");
          },
        })
      )
    )
    .pipe(
      babel({
        presets: [["@babel/env", { modules: false }]],
      })
    )
    .pipe(
      uglify({
        output: {
          comments: "/^!/",
        },
      })
    )
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest("./js"));
});
