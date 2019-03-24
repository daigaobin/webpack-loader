let loaderUtils = require('loader-utils'); //loader工具类
function loader(source){
    let filename = loaderUtils.interpolateName(this, '[hash].[ext]', {content: source})
    this.emitFile(filename, source); //生成文件
    return `module.exports = "${filename}"`;
}

loader.raw = true; //使用二进制流
module.exports = loader;