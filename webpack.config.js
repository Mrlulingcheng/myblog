const HtmlWebPackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry:"./src/index.js",//入口文件
    devServer:{//开启热重载
        contentBase:"./dist",
        quiet: true
    },
    devtool: 'inline-source-map',//开启源码映射
    resolve:{
        alias: {
            '@less': path.resolve(__dirname, 'src'),
            // '@api': path.resolve(__dirname, 'src/api'),
            // '@components': path.resolve(__dirname, 'src/components')
        },
        extensions:['.wasm', '.mjs', '.js', '.json', '.jsx']
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        babelrc:false,
                        presets:[
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'),{modules:false}]
                        ],
                        cacheDirectory:true
                    }
                }
            },{
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                },{
                    loader: "less-loader", options: {
                        strictMath: true,
                    }
                }]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({//将css提
            filename: `[name][contenthash:8].css`
        }),
        new FriendlyErrorsWebpackPlugin(),//减少编译时的无用信息
        new CleanWebpackPlugin(),//自动清理重复build后的文件（dist目录下）
        new HtmlWebPackPlugin({
            template:"./public/index.html",
            filename:'index.html',
            inject:true
        })
    ],
    stats: 'errors-only'
}