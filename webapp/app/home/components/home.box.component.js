define(function(require){
    var Backbone = require("backbone");
    require("highcharts");
    var BoxComponent = Backbone.View.extend({
        events : {

        },
        initialize : function(){

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
                    type : "column",
                    renderTo : $(this.el)[0],
                    animation:false
                },
                title : {
                    text : "Highcharts stacked column"
                },
                plotOptions : {
                    column : {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                            style: {
                                textShadow: '0 0 3px black'
                            }
                        }
                    }
                },
                series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2]
                }, {
                    name: 'Jane',
                    data: [2, 2, 3, 2, 1]
                }, {
                    name: 'Joe',
                    data: [3, 4, 4, 2, 5]
                }]                
            });
            return this;
        }
    });
    return BoxComponent;
});