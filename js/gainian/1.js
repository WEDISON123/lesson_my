function sum(a, b) {
    // 展开运算符
    let args = [...arguments];
    // es6 
    // let args = Array.from(arguments);
    // 借用数组的slice 方法
    // let args = Array.prototype.slice.call(arguments);
    // console.log(Array.prototype.toString.call(args));
    // console.log(Array.prototype.toString.call(arguments));
    // console.log(Array.prototype.toString.call(arguments, args));
    console.log(args);
}

sum(1,2)
// console.log();