function Person(name, age) {
    // 构造
    // 基于原型的封装 {}
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function() {
    console.log(`你好，${this.name}`);
}
const tao = new Person('taot',20);

/**
 * @func new 的过程
 * @params constructor ...
 * 1. js 是基于对象的 {}
 * 2. Person this 构造的过程
 * 3. 手动返回 实例对象
 */
function myNew(constructors, ...args) {
    console.log(args, '///');
    const obj = {}; // 基于对象
    // 借
    const constructor = Array.prototype.shift.call(arguments);
    // arguments 能用下标访问 但是没有数组的方法
    // 伪数组
    // console.log(typeof arguments, Object.prototype.toString.call(arguments));
    // console.log(arguments[0]);
    // {}
    // Person 属性？
    // console.log(arguments);
    // 展开 ...
    // call apply 手动指定函数内部的 this
    // constructor.call(obj, ...arguments);
    // console.log(constructor);
    constructor.apply(obj, args);
    console.log(obj);
    obj.__proto__ = constructor.prototype;
    return obj;
}
let lu = myNew(Person,'xman', 21);
// console.log(lu);