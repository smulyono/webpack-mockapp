module.exports = {
    resolve : {
        alias : {
            "jquery" : "assets/js/vendor/jquery.min",
            "backbone" : "assets/js/vendor/backbone",
            "underscore" : "assets/js/vendor/underscore",
            "text" : "assets/js/vendor/text",
            "highcharts" : "assets/js/vendor/highcharts"
        }
    },
    // shim for common
    module : {
        loaders : [
            {
                "test" : /backbone/,
                "loaders" : 'exports?Backbone!imports?jquery,underscore'
            },
            {
                "test" : /underscore/,
                "loaders": 'exports?_'
            },
            {
                "test" : /highcharts/,
                "loaders" : 'exports?Highcharts!imports?jquery'
            }
        ]
    }
};