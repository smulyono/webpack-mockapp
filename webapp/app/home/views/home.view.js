define(function(require) {

    var Backbone = require("backbone"),
        homeTemplate = require("text!homeTemplatePath/home.template.html"),
        BoxComponent = require("homeBoxComponent"),
        CircleComponent = require("CircleComponent");
        
    var homeView = Backbone.View.extend({
        initialize : function() {

        },
        events : {
            "click .drawingarea__button--circle" : "drawCircle",
            "click .drawingarea__button--box"    : "drawBox",
            "click .backToPreviousPage" : "backToPreviousPage"
        },
        render : function(){
            $(this.el).html(homeTemplate);
            return this;
        },
        drawBox : function() {
            this.$(".drawingarea__top").html(new BoxComponent().render().el);
        },
        drawCircle : function() {
            this.$(".drawingarea__bottom").html(new CircleComponent().render().el);
        },
        backToPreviousPage : function() {
            window.location.href="../login";
        }
    });

    return homeView;
});