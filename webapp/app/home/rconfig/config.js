module.exports = {
    entry : {
        "home" : "app/home/routes/index.js"
    },
    resolve : {
        alias : {
            "homeRouter" : "app/home/routes/index",
            "homeTemplatePath" : "app/home/templates",
            "homeView"   : "app/home/views/home.view",
            "homeBoxComponent" : "app/home/components/home.box.component"
        }
    }
};