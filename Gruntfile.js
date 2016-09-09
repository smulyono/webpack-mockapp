var PROJECT_DIR = "webapp",
    PROJECT_WATCHED_FILES = [
        PROJECT_DIR + "/app/**/*.js",
        PROJECT_DIR + "/common/**/*.js",
        PROJECT_DIR + "/pages/**/*.html"
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
            }
        }
    });

    require('load-grunt-tasks')(grunt);
}