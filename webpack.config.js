module.exports = {
    entry: [
        './src/MortgageComparison.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'MortgageComparison.js',
        library: 'mortgage-comparison',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};