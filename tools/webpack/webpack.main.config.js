/**
 * Main webpack configuration, configure the
 * basic loaders, plugins (if any). 
 * 
 * This main configuration will be merged
 * with any individual configurations.
 */
module.exports = {
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
    }
};