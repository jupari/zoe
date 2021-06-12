
const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const DotEnv= require('dotenv-webpack');


module.exports = {
    entry:['./src/index.js'],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    resolve:{
        extensions: ['.js','.jsx'],
        fallback: {
            path: require.resolve( 'path-browserify' ),

        },
    },
    mode:'development',
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.s?css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ],   
            },
            {
                test: /\.(png|jpg|gif)$/,

                use:[
                    {
                        'loader': 'file-loader',
                        options:{
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/i,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test:/\.woff$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff',
                        name: '[name].[ext]',
                        outputPath: './src/assets/fonts',
                        publicPath: './src/assets/fonts',
                        esModule: false,
                    }
                }
            }           
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filname:'./index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        }),
        new copyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,'src/assets/img'),
                    to: 'assets/images'
                },
                {
                    from: path.resolve(__dirname,'src/assets/icons'),
                    to: 'assets/images'
                }
            ]
        }),
        new DotEnv()
    ],
    devServer: {
        //contentBase: path.join(__dirname,'dist'),
        //compress:true,
        historyApiFallback:true,
        port: 3006
    }
}