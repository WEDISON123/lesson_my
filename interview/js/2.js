let nums = [1,2,3]
let obj = { val: 5 }
//  原数组不会受影响
// 命令式 到函数式
// 参数有3个 按需使用 第三参数式数组本身
let newNums = nums.map(function(item, index, array) {
    // 没有返回值
    console.log(item,index,array[index]);
    return item + index + array[index] + this.val
},obj)
console.log(newNums);