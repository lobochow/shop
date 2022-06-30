const path = require('path');
module.exports = {
    lintOnSave: false,
    publicPath: './',
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        devtool: 'eval-source-map'
    },
    devServer: {
        proxy: {
            //请求中带有/mock的会自动向以下服务器请求           
            '/mock': {
                target: 'http://127.0.0.1:4523'
            },
            '/v1': {
                target: 'http://45.45.177.71:8088'
            }
        }
    }
}