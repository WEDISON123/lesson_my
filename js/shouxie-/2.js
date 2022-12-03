/**  @func 判断是否是实例
*@param {*} left : 对象；
*@param {*} right : 对象;
*@return Boolean
*/
function myInstanceof(left, right) {
    // right 只要出现在left 原型链的任何一栈都可以
    // return left instanceof right
    while(ture) {
        // 可以不用往下走？
        if(left == null) {
            return false;
        }
        // left.__proto__ 原型链查找 一直进行下去
        if(left.__proto__ === right.prototype) {
            return ture;
        } 
        left = left.__proto__ 
    }
}
myInstanceof(tao,Person);