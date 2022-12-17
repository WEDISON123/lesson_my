// JS Number 64位     52位 存放数据的二进制
    // 表达的最大值？
let a = '1234567898765432100000012345678901'; // 64 位 2^52-1l 溢出
let b = '9876543210123456789000000000123';
function add(str1,str2) {
    let maxLength = Math.max(str1.length,str2.length)
    str1 = str1.padStart(maxLength,'0');
    str2 = str2.padStart(maxLength,'0');
    console.log(maxLength);
    let temp = 0; // 相加之和 %10
    let flag = 0; // 进位
    let result = '';
    // 低位到高位
    for(let i = maxLength-1; i > 0;i --){
        temp = parseInt(str1[i])+parseInt(str2[i])+flag;//
        flag = Math.floor(temp/10); // 进位
        result = temp % 10 + result
    }
    if(flag === 1) {
        result = '1' + result
    }
    return result
}
const result = add(a,b)
console.log(result);