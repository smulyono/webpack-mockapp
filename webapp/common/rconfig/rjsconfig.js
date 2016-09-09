require.config({
    paths : {
        "jquery" : "assets/js/vendor/jquery.min",
        "backbone" : "assets/js/vendor/backbone",
        "underscore" : "assets/js/vendor/underscore",
        "text" : "assets/js/vendor/text",
        "highcharts" : "assets/js/vendor/highcharts"
    },
    shim: {
        "backbone" : {
            "deps" : ["jquery", "underscore"],
            "exports" : "Backbone"
        },
        "underscore" : {
            "deps" : [],
            "exports" : "_"
        },
        "highcharts" : {
            "deps" : ["jquery"],
            "exports" : "Highcharts"
        }
    }
});