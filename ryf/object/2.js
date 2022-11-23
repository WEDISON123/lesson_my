// 构造函数
// js 没有class， 不是传统的面向对象字面量
// constructor
// js function 代替 class 类的封装
// 基于对象 
function Person (name, age) {
    this.name = name;
    this.age = age;
}
// 实例化
const wzz = new Person('温正中',20)
console.log(wzz.name);