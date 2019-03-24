let path = require('path');

//自定义插件
class p {
    apply(compiler) {
        compiler.hooks.emit.tap('emit', function () {
            console.log('emit');
        });
    }
}

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    /* resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loader')]
        //别名
        // alias: {
        //     loader: path.resolve(__dirname, 'loader', 'babel-loader.js')
        // }
    }, */
    watch: true,
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                path.resolve(__dirname, 'loader', 'style-loader'),
                path.resolve(__dirname, 'loader', 'less-loader')
            ]
        }, {
            test: /\.js$/,
            use: {
                loader: path.resolve(__dirname, 'loader', 'babel-loader'),
                options: {
                    presets: [
                        "@babel/preset-env"
                    ]
                }
            }
        }, {
            test: /\.js$/,
            use: {
                loader: path.resolve(__dirname, 'loader', 'banner-loader'),
                options: {
                    text: 'DGB 123',
                    filename: path.resolve(__dirname, 'banner.js'),
                }
            }
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: path.resolve(__dirname, 'loader', 'url-loader'),
                    options: {
                        limit: 200 * 1024
                    }
                }
            ]
        }]
    },
    plugins: [
        new p()
    ]
}