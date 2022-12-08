var propValue = function(obj){
    return obj.value
}
var add = function(a, b, c) {
    return a + b + c
  }
// function memorize(f) {
//     var cache = {
//         // 'kun': '及你太美'
//     };
//     // 作用域 
//     return function() {
        
//         var key = arguments.length + Array.prototype.join.call(arguments, ",");
//         // var key = arguments.length + arguments;
//         console.log(key);
//         if (key in cache) {
//             return cache[key]
//         } else {
//             return cache[key] = f.apply(this, arguments)
//         }
//     }
// }
// hasher JSON.stringify
var memorize = function(func, hasher) {
    var memoize = function(key) {
        console.log(key);
        var cache = memoize.cache;
        // key?
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        console.log(address);
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    // cache 挂载函数对象上
    memoize.cache = {};
    return memoize;
};

// var memorizeAdd = memorize(propValue,JSON.stringify);
// console.log(memorizeAdd({value: 1})) // 1
// console.log(memorizeAdd({value: 2})) // 1
var memorizeAdd = memorize(add, function(){
    var args = Array.prototype.slice.call(arguments)
    return JSON.stringify(args)
});
console.log(memorizeAdd(1,2,3)) // 1
console.log(memorizeAdd(1,5,3)) // 1
// console.log(propValue({value:1}));

