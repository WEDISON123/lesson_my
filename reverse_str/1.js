// 匿名函数
// js 变量或常量的类型有由值确定
// 函数表达式
// 回文 具有对称性
const reverse = function (str) {
    // let recerseStr = '';
    // for (let i = str.length - 1; i >= 0 ; i--) {
    //     recerseStr += str[i]
    // }
    // return recerseStr

    return str.split('').reverse().join('')
}
console.log(reverse('hello'));
console.log(reverse('aba'));
// 函数
// function reverse() {

// }