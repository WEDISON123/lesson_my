var add = function(a, b, c) {
    return a + b + c
  }
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
            // console.log('缓存了');
            return cache[key] // 没有运行 f
        } else {
            // return cache[key] = f(...arguments);
            // apply 传数组集合，作为 f 的参数
            // return cache[key] = f.call(this, ...arguments)
            // console.log('add');
            return cache[key] = f.apply(this, arguments)
        }
        // else return cache[key] = f.apply(this, arguments)
    }
}
// 高阶函数
// memorize 内部生成了闭包函数，并且return 给 memorizeAdd
var memorizeAdd = memorize(add);
// memorizeAdd(1,2,3);
console.time('usememorize'); // 计时开始
var x = ''; 
for(let i = 0; i < 100000; i ++) {
  memorizeAdd(1,2,3);
  // add(1,2,3);
  // x = x + '123';
}
console.timeEnd('usememorize');// 计时结束