define(function(require){

    var Backbone = require("backbone"),
        HomeView = require("homeView");

    var HomeRoutes = Backbone.Router.extend({
        routes : {
            "" : "mainPage"
        },
        mainPage : function() {
            var homeView = new HomeView();
            $("#mainBody").html(homeView.render().el);         
        }
    });

    
    var instance = new HomeRoutes();

    Backbone.history.start();

    return instance; 
});