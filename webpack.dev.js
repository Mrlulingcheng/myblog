/**
 * 
 * 
 *      webpack开发环境配置
 * 
 */
//webpack配置合并工具
const merge = require('webpack-merge');
//webpack公共配置
const common = require('./webpack.common.js');
const config = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map', //开启源码映射
    devServer: { //开启热重载
        contentBase: "./dist",
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 2,
                    }
                }, {
                    loader: "less-loader",
                    options: {
                        javascriptEnabled: true
                    }
                }
            ]
        }, ]
    }
})

module.exports = config