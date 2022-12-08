# 函数篇
- 函数记忆功能
    1. 函数的参数或函数的返回值也是函数， 我们称之为高阶函数
        memorize 高阶函数
    2. 闭包
    3. 巧妙地利用缓存，提升性能的关键

- 闭包是如何形成的？
    1. 函数嵌套函数，且运行
    2. 

- 记忆函数
    1. 用空间换时间 cache{ }
    2. 使用key
        arguements.length + Array.prototype.join.call(this,arguements)
        不能处理参数是对象这种情况
        原因时[object Object] join 本质， 会先toString
    3. memorize 函数需要优化