const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin}=require('webpack').container

module.exports = {
    entry:{"bundle":"./src/index.js"},
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"./dist"),
        publicPath:'http://localhost:3001/hello/'
    },
    mode:"none",
    module:{
        rules:[
            {
                    test:/\.(png|jpg)$/,
                    type:'asset/resource'
            },
            {
                    test:/\.css$/,
                    use:[MiniCssExtractPlugin.loader,"css-loader"]
            },
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({filename:"style.css"}),
        new HtmlWebpackPlugin({
            filename:"index.html",
            chunks: ['bundle'],
            title:"Express integration with webpack",
            meta:{
                description:'test description 1'
            },
            minify:false
        }),
        new ModuleFederationPlugin({
            name:"helloButtonApp",
            filename:"remoteEntry.js",
            exposes:{
                './helloButton':'./src/components/hello-button/helloButton.js'
            }
        })

    ]
}