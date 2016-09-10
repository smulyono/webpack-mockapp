/**
 * Utility to actually go into application folder and retrieve
 * all webpack configuration. Merge them appropriately and combine
 * with webpack.main.config.js
 */

var path = require("path"),
    gulp = require("gulp"),
    gutil = require("gulp-util"),
    clean = require("gulp-clean"),
    through = require("through2"),
    webpack = require("webpack"),
    /**
     * Merging different webpack configuration
     */
    merge = require("webpack-merge"),
    MAIN_CONFIGURATION = require("./tools/webpack/webpack.main.config.js"),
    DEVELOPMENT_CONFIGURATION = require("./tools/webpack/webpack.development.config.js");

// Determine npm target when it initially run 
// this is used to determine whether `production` or `development`
const TARGET = process.env.npm_lifecycle_event || "development",
    BUILD_DIR = path.resolve(path.join(__dirname, 'webapp/'));

// Prepare global variables here so that webpack configuration
// can be prepared inside async gulp task
var WEBPACK_CONFIGURATION = {};

function resetWebpackConfiguration() {
    WEBPACK_CONFIGURATION = {
        // setting the main context path for the output
        context : path.resolve(path.join(__dirname, 'webapp/')),
        // setting the main context path for the alias module
        resolve : {
            root : path.resolve(path.join(__dirname, 'webapp/'))
        },
        // setting the output path
        output : {
            path : BUILD_DIR
        },
        plugins : [
            new webpack.optimize.CommonsChunkPlugin({
                name : "vendor",
                async : true
            })
        ]
    };
    WEBPACK_CONFIGURATION = merge(WEBPACK_CONFIGURATION, MAIN_CONFIGURATION);
    if (TARGET === "development") {
        WEBPACK_CONFIGURATION = merge(WEBPACK_CONFIGURATION, DEVELOPMENT_CONFIGURATION);
    } 
}

// Using gulp to find all webpack configuration in the applications
// generate new webpack configuration and run dev-server
gulp.task('webpack-merge-configs', function(callback){
    // reset webpack configuration
    resetWebpackConfiguration();

    return gulp.src(["**/config.js"], {
        cwd : "webapp"
    }).pipe(through.obj(function(file, enc, cb){
        // get the webpack configuration and merge
        // with current main configuration
        WEBPACK_CONFIGURATION = merge(WEBPACK_CONFIGURATION, require(file.path));

        cb();
    })).on("end", function(){
    });
});

// cleaning up old directory
gulp.task('clean:build', function() {
    return gulp.src(["**/*_bundle.js"], {
        cwd : BUILD_DIR
    }).pipe(clean());
});

gulp.task('webpack:build', ['clean:build', 'webpack-merge-configs'], function(){
    gutil.log(WEBPACK_CONFIGURATION);
    webpack(WEBPACK_CONFIGURATION, function(err, stats){
        if (err) throw new gutil.PLuginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            colors: true,
            timings:true,
            chunks:true
        }));
    });
});


gulp.task('default', ["webpack:build"]);