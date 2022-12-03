// 构造函数
// 哪一站？ Function -> Object 
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
console.log(tao instanceof Person);
console.log(tao instanceof Object);