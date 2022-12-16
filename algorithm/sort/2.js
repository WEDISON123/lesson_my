// 内存分配 放在栈内存 stack
let x = 1,y = 2; // 简单
let c = x; // 值的拷贝
c = 3;
console.log(x);
// 内存分配 对象放在堆内存中 heap
let o = {name: 'wen'};// 对象
let b = o; // 指针的引用
b.name = '飞飞';
console.log(o.name);
let z;
z = x;
x = y;
y = z;
console.log(x,y);