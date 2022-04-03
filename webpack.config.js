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
        ]
    },
    plugins : [],
    devServer : {},
}