let loaderUtils = require('loader-utils'); //loader工具类
let mime = require('mime'); //获取文件后缀工具类
function loader(source){
    let {limit} = loaderUtils.getOptions(this);
    if(limit && limit > source.length) { //base64
        return `module.exports = "data:${mime.getType(this.resourcePath)};base64,${source.toString('base64')}"`
    } else {
        return require('./file-loader').call(this, source)
    }
}

loader.raw = true; //使用二进制流
module.exports = loader;