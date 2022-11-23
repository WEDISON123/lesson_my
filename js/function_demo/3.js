// 变量的作用域
'use strict';
var name = 'edi'// 全局 window
// this 指向    调用方式
// js 变量属于 作用域 
function func() {
    y = 2;// 不加 var 全局 ，不好
    var name = 'jay' // func 内部 局部变量
    {// 块级作用域
        let z =1;
        var x = 1;// es5 不支持块级作用域
        let name = 'ikun'// 块级作用域
    }
    console.log(x, y);
}

func();
console.log(y);