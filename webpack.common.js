const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

console.log("(===================" + process.env.NODE_ENV + "===============)")
/**
 * TODO
 * 需要配置将less配置的目标文件详细化指定antd
 * 
 */
module.exports = {
    entry: "./src/index.js", //入口文件
    resolve: {
        alias: {
            '@less': path.resolve(__dirname, 'src'),
            '@': path.resolve(__dirname, 'src'),
            "@public": path.resolve(__dirname, 'public'),
            // '@api': path.resolve(__dirname, 'src/api'),
            // '@components': path.resolve(__dirname, 'src/components')
        },
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: [
                        ["import", {
                            libraryName: "antd",
                            "style": true
                        }],
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-transform-arrow-functions",
                        "@babel/plugin-transform-destructuring"
                    ],
                    babelrc: false,
                    presets: [
                        require.resolve('@babel/preset-react'),
                        [require.resolve('@babel/preset-env'), {
                            modules: false
                        }],
                    ],
                    cacheDirectory: true
                }
            }
        }, {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    exclude: [
                        path.resolve(__dirname, '../node_modules')
                    ]
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: 'file-loader'
        }]
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(), //减少编译时的无用信息
        new HtmlWebPackPlugin({ //根据模板文件生成打包后的index
            template: "./public/index.html",
            filename: 'index.html',
            inject: true
        })
    ],
    stats: 'errors-only'
}