// 手写call, es6 比老版本优雅
Function.prototype.call = function(context, ...args) {
    context = context || globalThis
    let fn = Symbol('fn')
    // 给context 动态添加了fn属性
    context.fn = this // 绝对不会覆盖context上的属性
    // 返回值？
    // 只有读源码， 写源码才会用到eval
    const result = eval('context.fn(...args)') // ???
    delete context // 让context干净 代码洁癖
    return result
}

const me = { name: 'Jack' }
function say(a,b,c) {
  console.log(`My name is ${this.name || 'default'}`,a + b + c);
}
say.call(me, 1, 2, 3)