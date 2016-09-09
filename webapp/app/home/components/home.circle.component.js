define(function(require){
    var Backbone = require("backbone");

    require("highcharts");

    var CircleComponent = Backbone.View.extend({
        initialize : function(){

        },
        events : {

        },
        render : function(){
           // create highcharts box charts and return the SVG
            $(this.el).css({
                "width" : "400px",
                "height": "400px",
                "margin": "0 auto"
            });

            var boxCharts = new Highcharts.Chart({
                chart : {
                    type : "pie",
                    renderTo : $(this.el)[0],
                    plotShadow : false,
                    plotBackgroundColor : null,
                    plotBorderWidth:null
                },
                title: {
                        text: 'Browser market shares January, 2015 to May, 2015'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: [{
                            name: 'Microsoft Internet Explorer',
                            y: 56.33
                        }, {
                            name: 'Chrome',
                            y: 24.03,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Firefox',
                            y: 10.38
                        }, {
                            name: 'Safari',
                            y: 4.77
                        }, {
                            name: 'Opera',
                            y: 0.91
                        }, {
                            name: 'Proprietary or Undetectable',
                            y: 0.2
                        }]
                    }]             
            });
            return this;
        }
    });
    return CircleComponent;
});