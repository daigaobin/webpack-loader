let loaderUtils = require('loader-utils'); //loader工具类
let validateOptions = require('schema-utils'); //效验参数工具类
let fs = require('fs');
function loader(source){
    this.cacheable && this.cacheable(); //添加缓存

    let options = loaderUtils.getOptions(this);
    let cb = this.async();
    let schema = {
        type: 'object',
        properties:{
            text: {
                type: 'string'
            },
            filename: {
                type: 'string'
            }
        }
    }

    validateOptions(schema,options, 'banner-loader');

    if(options.filename) {
        this.addDependency(options.filename); //自动添加文件依赖，用于watch：true
        fs.readFile(options.filename, 'utf8', function(err,data) {
            cb(err,`/**${data}**/${source}`);
        });
    }else {
        cb(null,`/**${options.text}**/${source}`);
    }
}

module.exports = loader;