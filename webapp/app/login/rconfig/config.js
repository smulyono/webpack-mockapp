module.exports = {
    entry : {
        login : "app/login/routes/index.js"
    },
    resolve : {
        alias : {
            "loginRouter" : "app/login/routes/index",
            "loginTemplatePath" : "app/login/templates",
            "loginView"   : "app/login/views/login.view"            
        }
    }
};