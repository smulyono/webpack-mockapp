define(function(require){

    var Backbone = require("backbone"),
        LoginView = require("loginView");

    var HomeRoutes = Backbone.Router.extend({
        routes : {
            "" : "mainPage"
        },
        mainPage : function() {
            var loginView = new LoginView();
            $("#mainBody").html(loginView.render().el);         
        }
    });

    
    var instance = new HomeRoutes();

    Backbone.history.start();

    return instance; 
});