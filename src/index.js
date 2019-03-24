let str = require('./a.js');
// import './index.less'; //webpack通过自己写的style-loader less-loader会报错，暂时注释掉，自己的my-pack可以实现打包
console.log(str);

import logo from './logo.svg';

const image = new Image()
image.src = logo
document.body.appendChild(image)
