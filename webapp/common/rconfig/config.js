module.exports = {
    entry : {
        vendor : ["jquery", "backbone", "underscore", "highcharts"]
    },
    resolve : {
        alias : {
            "jquery" : "assets/js/vendor/jquery.min",
            "backbone" : "assets/js/vendor/backbone",
            "underscore" : "assets/js/vendor/underscore",
            "highcharts" : "assets/js/vendor/highcharts"
        }
    },
    resolveLoader : {
        alias : {
            // replace the requirejs-text with raw-loader
            text : 'raw-loader'
        }
    },
    // shim for common
    module : {
        loaders : [
            {
                "test" : /backbone/,
                "loader" : 'exports?Backbone!imports?jquery,underscore'
            },
            {
                "test" : /underscore/,
                "loader": 'exports?_'
            },
            {
                "test" : /highcharts/,
                "loader" : 'exports?Highcharts!imports?jquery'
            }
        ]
    }
};