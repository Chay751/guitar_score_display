const path = require('path');

module.exports = {
    mode: 'development',
    /*设置要打包的源文件*/
    entry: './src/main.js',
    /*设置打包后的路径及输出文件名*/
    output: {
        /*输出路径，__dirname 为当前文件所在目录所在的路径*/
        path: path.resolve(__dirname, 'dist'),
        /*输出文件名*/
        filename: 'bundle.js'
    }
};