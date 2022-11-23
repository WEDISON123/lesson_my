const arr = [1,2,3];
// 在末尾添加多个元素
Array.prototype.push = function() {
    // 覆盖原有方法
    // 如何得到所有的参数  [] arguments
    // console.log(arguments);

    // console.log(typeof arguments, Object.prototype.toString.call(arguments))
    // console.log(arguments.length)

    // for( var i = 0; i < arguments.length; i ++) {
    //     this[this.length] = arguments[i];
    // }

    for(this[this.length] of arguments){
    }
}
arr.push(4,5);
console.log(arr);