function add(a,b) {
    return a + b;    
}
// 假设memorize 可以实现函数记忆
// memorize 函数 () add ->
var memorizedAdd = memorize(add);
memorizedAdd(1,1);