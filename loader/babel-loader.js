let babel = require('@babel/core');
let loaderUtils = require('loader-utils'); //loader工具类

function loader(source){
    let options = loaderUtils.getOptions(this);
    let cb = this.async();
    babel.transform(source, {
        ...options,
        sourceMap: true
    }, function(err, result) {
        cb(err, result.code, result.map); //异步回调
    })
}

module.exports = loader;