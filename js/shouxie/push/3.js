// pop  弹出数组末尾元素
const arr = [1,2,3,4];
// console.log(arr.pop());
// console.log(arr);
// 变量的值类型是由值决定的
Array.prototype.pop = function() {
    let temp = this[this.length - 1];
    // 删除
    this.length --;

    return temp;
}

console.log(arr.pop());
console.log(arr);