let obj = { name: 'sy', age: 18, homeTown: { name: 'bbb' } }
const obj2 = Object.assign( {}, obj, { name: 'aaa' }) // 浅拷贝
console.log(obj, obj2);
obj2.homeTown.name = 'ccc'
obj2.name = 'eee'
console.log(obj, obj2);