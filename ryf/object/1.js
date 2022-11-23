// 对象就是属性和方法的结合
// OOP object oriented programming
// class Person {

// }
// const wzz = new Person();
let obj = {
    name: 'ling',
    sayHi() {
        console.log('hello');
    }
}
obj.name
// 对象
const wzz = new Object();// js Object 函数 也是一切对象的原型
// 对象字面量都是基于Object 来构造， 原型式面向对象

wzz.name = '温正中';
wzz.sayHi = function() {
    console.log('hello');
}
console.log(wzz);