/**
 * 
 * 
 *      webpack生产环境配置
 * 
 */

//webpack配置合并工具
const merge = require('webpack-merge');
//webpack公共配置
const common = require('./webpack.common.js');


const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

// 分析打包时间
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
//分析打包内容
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const smp = new SpeedMeasurePlugin();
const config = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash:8].js',
        path: __dirname + '/dist',
        publicPath: "/"
    },
    optimization: {
        concatenateModules: false,
    },
    devtool: 'source-map', //开启源码映射
    plugins: [
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({ //将css提取成单独的文件
            filename: `[name][contenthash:8].css`
        }),
        new CleanWebpackPlugin(), //自动清理重复build后的文件（dist目录下）
    ],
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        // sourceMap: true,
                        importLoaders: 2,
                    }
                }, {
                    loader: "less-loader",
                    options: {
                        // sourceMap: true,
                        javascriptEnabled: true
                    }
                }
            ]
        }, ]
    }

})

module.exports = smp.wrap(config)