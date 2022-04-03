const path = require('path');
module.exports ={
    entry : '.src/index.js',
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve : {
        extensions : ['js', 'jsx']
    },
    mode: 'development',
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : { loader : 'babel-loader' }
            },
            {
                test : /\.html$/,
                use : [ {loader: 'html-loader'} ]
            },
            {
                test: /\.(css)$/,
                use : [ 'css-loader' ]
            }
        ]
    },
    plugins : [],
    devServer : {},
}