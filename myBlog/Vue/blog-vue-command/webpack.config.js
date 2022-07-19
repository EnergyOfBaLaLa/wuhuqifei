const path = require('path');

module.exports={
    entry: './src/main.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'dist.js'
    },
    modules:{
        rules:[
                {
                    test: /\.css$/, 
                    use: [
                        {loader:'style-loader'},
                        {loader:'css-loader'}
                    ]
                },
                {
                    test: /\.js$/, 
                    use: [
                        {loader:'babel-loader'}
                    ]
                },
                {
                    test: /\.vue$/, 
                    use:[
                        {loader:'vue-loader'}
                    ]
                },
                {
                    test: /\.scss$/, 
                    use: [
                        {loader:'style-loader'}, 
                        {loader:'css-loader'},
                        {loader:'postcss-loader'},
                        {loader:'sass-loader'}
                    ]
                },
                {
                    test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/, 
                    use: [
                        {
                        loader:'url-loader',
                        options:{
                        limit: 10240, 
                        name: 'img/[name].[ext]',
                        outputPath: 'imgs/'
                        }
                    }
                    ], 
                exclude: /node_modules/
                },
                {
                    test: /\.html$/, 
                    use:[
                        {loader:'html-loader'}
                    ]
                },
                {
                    test: /\(htm|html)$/,
                    use:[
                        {loader:'html-withimg-loader'}
                    ]
                },
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()

    ],
    
    
}
