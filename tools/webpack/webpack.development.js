/**
 * Development webpack configuration
 */
module.exports = {
    buildEntry : function(entryPoint, host, port){
        return [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://' + host + ':' + port,
            entryPoint,
        ];
    },
    developmentConfiguration : {
        devtool : 'eval-source-map',
        // https://webpack.github.io/docs/webpack-dev-server.html#api
        devServer : {
            hot : true,
            inline : true,
            historyApiFallback : false,
            compress : true
        }
    }
};