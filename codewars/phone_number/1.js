function creatPhoneNumber(numbers) {
    // var x = '';
    // for(var i = 0; i<3; i++){
    //     x =  x + numbers[i];
    // }
    // var y = '';
    // for(var i = 3; i<6; i++){
    //     y =  y + numbers[i];
    // }
    // var z = '';
    // for(var i = 6; i<=9; i++){
    //     z =  z + numbers[i];
    // }
    // console.log('(' + x +') ' + y + '-' +z);

    //字符串 (123) 456-798
    // 字符串拼接
    // return `(${numbers[0]}${numbers[1]}${numbers[2]}${numbers[3]}${numbers[4]})`
    
    const nums = numbers.join ('');
    const a = nums.substr(0,3);
    const b = nums.substr(3,3);
    const c = nums.substr(6,4);
    console.log('(' + a +') ' + b + '-' +c);
}
// (123) 456-798
creatPhoneNumber([1,2,3,4,5,6,7,8,9,0]);

let name = `liu`
let word = `hellow, ${name}。`
console.log(word);

