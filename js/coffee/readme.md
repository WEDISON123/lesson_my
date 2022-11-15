# 泡一杯coffee

    1. 把水煮沸
    2. 用沸水冲泡coffee
    3. 把coffee倒进杯子
    4. 加糖加奶

传统的面向对象
coffee 类
kpcn instance

- JS 面向对象的实现方式
    1. 对象字面量 表达性强 独一无二
        {
            name: 'kk'，
        }
    2. 模板批量生产的
        class + constructor new
    3. 函数生产

- 类构建的过程
    1. 定义一个类 Coffee 模板
    2. 在构造函数（constructor）中，传了
        type属性
        this.type this 是实例后的对象
        我们要的实例对象构建出来
    3. 添加一些方法， public 共有方法
        cof.boilWater();

- 面向对象的语法总结
    1. class 类的抽象   coffee or tea 抽象了一下 父类
    2. extends 继承
        子类就拥有了父类的模板
    3. 多个子类 细节略有不同
        重写父类（同样的方法名）的方法。。。
        super 调用父类的方法