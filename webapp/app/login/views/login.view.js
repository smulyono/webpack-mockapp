define(function(require){

    var Backbone = require("backbone"), 
        CircleComponent = require("CircleComponent"),
        loginTemplate = require("text!loginTemplatePath/login.template.html");

    var LoginView = Backbone.View.extend({
        events : {
            "click .showCircle" : "drawCircle",
            "click .showNextPage" : "gotoNextPage"
        },
        initialize : function(){

        },
        render : function() {
            var templateVar = _.template(loginTemplate);
            $(this.el).html(templateVar({
                title : "LOGIN PAGE"
            }));
            return this;
        },
        drawCircle : function() {
            this.$(".chartbox").html(new CircleComponent().render().el);
        },
        gotoNextPage : function() {
            window.location.href="../home";
        }
    });

    
    return LoginView; 
});