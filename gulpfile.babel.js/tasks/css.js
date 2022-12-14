import gulp from "gulp"

// Config
import path from "../config/path"
import app from "../config/app"

// Plugins
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import size from "gulp-size"
import concat from "gulp-concat"
import autoprefixer from "gulp-autoprefixer"
import csso from "gulp-csso"
import rename from "gulp-rename"
import shorthand from "gulp-shorthand"
import groupCssMediaQueries from "gulp-group-css-media-queries"

// CSS processing
export default () => {
  gulp.src(path.css.libs, { sourcemaps: app.isDev })
    .pipe(concat('vendor.min.css'))
    .pipe(csso())
  .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
  return gulp.src(path.css.src, { sourcemaps: app.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "CSS",
        message: error.message
      }))
    }))
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "main.css" }))
  .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "main.min.css" }))
  .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
}