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
        // https://github.com/webpack/webpack/issues/1943
        // multiple vendor chunks 
        new webpack.optimize.CommonsChunkPlugin({
            names : ["common", "vendors"]
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize:true
        })
    ]    
};