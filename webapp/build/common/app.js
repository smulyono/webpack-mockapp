webpackJsonp([3],{10:function(module,exports,__webpack_require__){eval("var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($, Highcharts) {!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require){\n    var Backbone = __webpack_require__(5);\n\n    __webpack_require__(9);\n\n    var CircleComponent = Backbone.View.extend({\n        initialize : function(){\n\n        },\n        events : {\n\n        },\n        render : function(){\n           // create highcharts box charts and return the SVG\n            $(this.el).css({\n                \"width\" : \"400px\",\n                \"height\": \"400px\",\n                \"margin\": \"0 auto\"\n            });\n\n            var boxCharts = new Highcharts.Chart({\n                chart : {\n                    type : \"pie\",\n                    renderTo : $(this.el)[0],\n                    plotShadow : false,\n                    plotBackgroundColor : null,\n                    plotBorderWidth:null\n                },\n                title: {\n                        text: 'Browser market shares January, 2015 to May, 2015'\n                    },\n                    tooltip: {\n                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'\n                    },\n                    plotOptions: {\n                        pie: {\n                            allowPointSelect: true,\n                            cursor: 'pointer',\n                            dataLabels: {\n                                enabled: false\n                            },\n                            showInLegend: true\n                        }\n                    },\n                    series: [{\n                        name: 'Brands',\n                        colorByPoint: true,\n                        data: [{\n                            name: 'Microsoft Internet Explorer',\n                            y: 56.33\n                        }, {\n                            name: 'Chrome',\n                            y: 24.03,\n                            sliced: true,\n                            selected: true\n                        }, {\n                            name: 'Firefox',\n                            y: 10.38\n                        }, {\n                            name: 'Safari',\n                            y: 4.77\n                        }, {\n                            name: 'Opera',\n                            y: 0.91\n                        }, {\n                            name: 'Proprietary or Undetectable',\n                            y: 0.2\n                        }]\n                    }]             \n            });\n            return this;\n        }\n    });\n    return CircleComponent;\n}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(9)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9jb21tb24uY2lyY2xlLmNvbXBvbmVudC5qcz9jNTM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ1RkFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSx1Q0FBdUMsWUFBWSxNQUFNLHFCQUFxQjtBQUM5RSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQyx1SiIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZShmdW5jdGlvbihyZXF1aXJlKXtcbiAgICB2YXIgQmFja2JvbmUgPSByZXF1aXJlKFwiYmFja2JvbmVcIik7XG5cbiAgICByZXF1aXJlKFwiaGlnaGNoYXJ0c1wiKTtcblxuICAgIHZhciBDaXJjbGVDb21wb25lbnQgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgICAgIGluaXRpYWxpemUgOiBmdW5jdGlvbigpe1xuXG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50cyA6IHtcblxuICAgICAgICB9LFxuICAgICAgICByZW5kZXIgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAvLyBjcmVhdGUgaGlnaGNoYXJ0cyBib3ggY2hhcnRzIGFuZCByZXR1cm4gdGhlIFNWR1xuICAgICAgICAgICAgJCh0aGlzLmVsKS5jc3Moe1xuICAgICAgICAgICAgICAgIFwid2lkdGhcIiA6IFwiNDAwcHhcIixcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjQwMHB4XCIsXG4gICAgICAgICAgICAgICAgXCJtYXJnaW5cIjogXCIwIGF1dG9cIlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBib3hDaGFydHMgPSBuZXcgSGlnaGNoYXJ0cy5DaGFydCh7XG4gICAgICAgICAgICAgICAgY2hhcnQgOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcInBpZVwiLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUbyA6ICQodGhpcy5lbClbMF0sXG4gICAgICAgICAgICAgICAgICAgIHBsb3RTaGFkb3cgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcGxvdEJhY2tncm91bmRDb2xvciA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHBsb3RCb3JkZXJXaWR0aDpudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0Jyb3dzZXIgbWFya2V0IHNoYXJlcyBKYW51YXJ5LCAyMDE1IHRvIE1heSwgMjAxNSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRGb3JtYXQ6ICd7c2VyaWVzLm5hbWV9OiA8Yj57cG9pbnQucGVyY2VudGFnZTouMWZ9JTwvYj4nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1BvaW50U2VsZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJbkxlZ2VuZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQnJhbmRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yQnlQb2ludDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogNTYuMzNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ2hyb21lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAyNC4wMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRmlyZWZveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMTAuMzhcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU2FmYXJpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiA0Ljc3XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ09wZXJhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwLjkxXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1Byb3ByaWV0YXJ5IG9yIFVuZGV0ZWN0YWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMC4yXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XSAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQ2lyY2xlQ29tcG9uZW50O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2NvbW1vbi9jb21wb25lbnRzL2NvbW1vbi5jaXJjbGUuY29tcG9uZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gM1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=")}});