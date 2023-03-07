let ary = [1,[2,[3,[4,5]]],6]
let str = JSON.stringify(ary)// 序列化
// let o = {a: 1, b: 2, c: 3}

// es10 内置 flat API，es6 2015
// ary = ary.flat(Infinity); // es10(2019) 提供的flat API 兼容性问题

// console.log(str);

// '//'正则的格式   字符串匹配规则
// g 正则修饰符 全局， 不停 一直匹配
// （）分组 匹配的各种可能放到这个分组里
// | 或则 正则式按照字符匹配的，[a-z] 匹配一个小写字母 [a-z]{3,5} 匹配3~5次 
// [] 本身式正则的运算符号 \[ \] 转译 匹配其本身
// ary = str.replace(/(\[|])/g,'').split(',').map(item => parseInt(item))
// const ary1 = str.replace(/(\[|])/g,'').split(',').map(item => +item)
// console.log(ary,ary1);

// str = str.replace(/(\[|\])/g,'')
// str = '[' + str + ']'
// console.log(JSON.parse(str));

// 递归
// let result = []
// let fn = function(ary) {
//     for(let i = 0; i < ary.length; i ++) {
//         let item = ary[i]
//         if(Array.isArray(ary[i])) {
//             fn(item)
//         }else {
//             result.push(item)
//         }
//     }
// }
// fn(ary);
// console.log(result);

// function flatten(ary) {
//     return ary.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur) ? flatten(cur): cur)
//     },[])
// }
// console.log(flatten(ary));

while(ary.some(Array.isArray)) {
    ary = [].concat(...ary)
}2
console.log(ary);