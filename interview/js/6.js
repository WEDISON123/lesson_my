// let arr = [1,2,3]
// let newArr = arr // 赋值不是拷贝 同一个内存地址引用
// newArr[0] = 100

// console.log(arr);

let arr = [1, 2, {val: 4}]
// 浅拷贝 复杂数据类型任然是原地址
// let newArr = arr.slice()
// newArr[0] = 100
// newArr[2].val = 5
// console.log(arr, newArr);

// 深拷贝
// 循环引用 内存溢出
// 函数等 不支持序列化 直接忽略
let newArr = JSON.parse(JSON.stringify(arr));
newArr[2].val = 5
console.log(arr, newArr);
