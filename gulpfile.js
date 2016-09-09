/**
 * Utility to actually go into application folder and retrieve
 * all webpack configuration. Merge them appropriately and combine
 * with webpack.main.config.js
 */

var gulp = require("gulp"),
    webpack = require("webpack"),
    MAIN_CONFIGURATION = require("./tools/webpack/webpack.main.config.js");

// loop through all files 
var addedFiles = [];

// Using gulp to find all webpack configuration in the applications
// generate new webpack configuration and run dev-server
gulp.task('webpack:build', function(){
    return gulp.src(["**/config.js"], {
        cwd : "webapp"
    }).on("data", function(file){
        addedFiles.push(file.path);
    }).on("end", function(){
        // merge every webpack 
        addedFiles.forEach(function(item) {
            var req = require(item);
            console.log(req);
        });
    });
});


gulp.task('default', ["webpack:build"]);