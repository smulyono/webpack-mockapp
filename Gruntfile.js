var PROJECT_DIR = "webapp",
    PROJECT_WATCHED_FILES = [
        PROJECT_DIR + "/app/**/*.js",
        PROJECT_DIR + "/common/**/*.js",
        PROJECT_DIR + "/pages/**/*.html"
    ],
    BUILD_PROJECT_WATCHED_FILES = [
        PROJECT_DIR + "/app/**/*_bundle.js",
        PROJECT_DIR + "/pages/**/*_build.html"
    ];

module.exports = function(grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        browserSync : {
            dev : {
                options : {
                    server : {
                        baseDir : PROJECT_DIR,
                        directory : false,
                        index : "index.html"
                    },
                    online : true,
                    watchTask : false,
                    https : false,
                    open : false,
                    port : 3456
                },
                bsFiles : {
                    src : PROJECT_WATCHED_FILES
                }
            },
            build : {
                options : {
                    server : {
                        baseDir : PROJECT_DIR,
                        directory : false,
                        index : "index_build.html"
                    },
                    online : true,
                    watchTask : false,
                    https : false,
                    open : false,
                    port : 3457
                },
                bsFiles : {
                    src : BUILD_PROJECT_WATCHED_FILES
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
}