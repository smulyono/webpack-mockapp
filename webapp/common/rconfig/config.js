var webpack = require("webpack");

module.exports = {
    entry : {
        vendors : ["jquery", "backbone", "underscore", "highcharts"]
    },
    resolve : {
        alias : {
            "jquery" : "assets/js/vendor/jquery.min",
            "underscore" : "assets/js/vendor/underscore",
            "backbone" : "assets/js/vendor/backbone",
            "CircleComponent" : "common/components/common.circle.component"
        },
        moduleDirectories : [
            "assets/js/vendor"
        ]
    },
    resolveLoader : {
        alias : {
            // replace the requirejs-text with raw-loader
            text : 'raw-loader'
        }
    },
    // shim for common
    module : {
        noParse : [
            "highcharts", "underscore", "backbone", "jquery"
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            _ : "underscore",
            $ : "jquery",
            jQuery : "jquery",
            Highcharts : "highcharts"
        })
    ]
};