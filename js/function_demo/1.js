// 封装 普通的相加函数
// add 函数声明在window
'use strict';
function Test() {
    // this 由运行的方式决定
    this.x = 1;
}
// 函数可以被new ，被new的函数也叫构造函数
const o = new Test();
console.log(o.x);

function add(x, y) {
    // 检验参数  this,arguments
    console.log(this,arguments);
    return x + y;
}

let obj = {
    add: add
}

console.log(add(1,2));
obj.add();// 作为对象的方法调用的时候


