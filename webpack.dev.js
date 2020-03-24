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
            exclude:[/node_modules/],
            use: [{
                    loader: "style-loader"
                },
                {//参考地址https://www.npmjs.com/package/css-loader
                    loader: "css-loader",
                    options: {
                        url:true,//设置在css中使用webpack的前缀代替路径，可以修改为方法，具体参考
                        modules:true, //开启css模块化
                    }
                }, {
                    loader: "less-loader",
                    options: {
                        javascriptEnabled: true
                    }
                }
            ]
        },{
            test: /\.less$/,
            exclude:[/src/],
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        url:true,
                    }
                }, {
                    loader: "less-loader",
                    options: {
                        javascriptEnabled: true
                    }
                }
            ]
        },]
    }
})

module.exports = config