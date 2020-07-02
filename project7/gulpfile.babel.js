import gulp from "gulp";
import sass from "gulp-sass";

sass.compiler = require("node-sass");

const routes = {
  scss: {
    watch: "src/scss/*.scss",
    src: "src/scss/style.scss",
    dest: "dist",
  },
};

const style = () =>
  gulp
    .src(routes.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(routes.scss.dest));

const watch = () => gulp.watch(routes.scss.watch, style);

const assets = gulp.series([style]);

const live = gulp.series([watch]);

export const dev = gulp.series([assets, live]);
