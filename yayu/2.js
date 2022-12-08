// 本分
function add(a, b) {
    return a + b;
}
// fn 是等待着被优化的函数
// 闭包 函数内部还有函数
function memorize(f) {
    var cache = {
        // 'kun': '及你太美'
    };
    // 作用域 
    return function() {
        // console.log('innerFunction',cache.kun);
        // console.log(Array.prototype.join.call(arguments, ","),'///');
        // key 字符串
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        // var key = arguments.length + arguments;
        // console.log(key);
        if (key in cache) {
            console.log('缓存了');
            return cache[key] // 没有运行 f
        } else {
            // return cache[key] = f(...arguments);
            // apply 传数组集合，作为 f 的参数
            // return cache[key] = f.call(this, ...arguments)
            console.log('add');
            return cache[key] = f.apply(this, arguments)
        }
        // else return cache[key] = f.apply(this, arguments)
    }
}
// 函数运行完后就销毁
// 函数将会进入执行栈 创建函数作用域
var memorizeAdd = memorize(add);// 运行才会生成闭包函数
// 出栈 ？ 内存的回收 cache 没有了      cache 被接下来的函数引用着
memorizeAdd(1,2); // 运行时可以找到生成时上下文环境中的变量
console.log(memorizeAdd(1,2));