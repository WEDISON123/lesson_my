// 数组 优势是 以o(1)的时间访问到 第i个元素
const arr = [1,2,3];
const arr2 = ['a','b','c'];
// arr.push(4);
// console.log(arr);
// console.log(arr.push);
Array.prototype.push2 = function(n) {
    this[this.length] = n;
    return this .length;
}
arr.push2(4);
// 返回的是数组的length
console.log(arr.push2(5), '/////');

// arr2.push2('d');
console.log(arr);