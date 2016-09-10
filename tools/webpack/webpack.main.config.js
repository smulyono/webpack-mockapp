/**
 * Main webpack configuration, configure the
 * basic loaders, plugins (if any). 
 * 
 * This main configuration will be merged
 * with any individual configurations.
 */
var webpack = require("webpack");

module.exports = {
    resolve : {
        moduleDirectories : ["node_modules"]
    },
    module : {
        loaders : [
            {
                "test" : /\.css$/,
                "loaders"  : ['style', 'css']
            },
            {
                "test" : /\.less$/,
                "loaders" : ['style', 'css', 'less']
            }
        ]
    },
    plugins : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name : "vendors"
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize:true
        })
    ]    
};