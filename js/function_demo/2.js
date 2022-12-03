// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// sayHello() {

// }
// }
//  构造函数 对象添加属性
// 共享 类的方法
// 'use strict';
var name = '正中';
var age = 20;
function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function() {
    console.log(`hi,我是${this.name},今年${this.age}`)
    console.log('hi,我是' + this.name + ',今年' + this.age);
}
// 
const jay = new Person('温',21);//构造函数
jay.sayHello();//对象的方法被运行
// console.log(jay.name + ' ' + jay.age);

const fn = jay.sayHello;
fn();