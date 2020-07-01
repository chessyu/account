
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const path = require('path')
const webpack  = require('webpack')
const env = require(`./config/${process.env.ENVPARA}.env.js`)



module.exports = {
    devtool:'sourcemap',
    devServer:{
        port:8088,
        hot:true,
        historyApiFallback:true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        proxy:{
            '/dev-api':{
                target:'http://m2-dev.hhycdk.com',   //本地调试
                changeOrigin:true,
                ws:true,
                pathRewrite: {
                    '/dev-api': '',//重写,
                }
            }
        }
    },
    
    plugins:[
        new WebpackBuildNotifierPlugin({
            title:"项目编译成功😘",
            logo:path.resolve(__dirname,'../src/assets/img/icon.png'),
            suppressSuccess: true
        }),
        new ProgressBarPlugin({
             // clear: true,
             format: 'build [:bar] :percent (:elapsed seconds)',
             clear: false, 
             width: 60
        }),
        new webpack.DefinePlugin({
            'process.env' : env
        })
    ]
}