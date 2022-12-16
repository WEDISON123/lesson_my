# 闭包
    - 无障碍访问
    - html5 的input 新属性
        es6 const let arrow function Promise 
        ...
        html5 <!DOCTYPE html>
            input readonly placeholder type number requried
            localstorage.getItem() setItem
            ...
    - js 对象-> html 标签
    html 标签 -> 对应于js对象
        html DOM 树(数据结构) -> JS DOM 对象 转化过程
        Object.prototype.toString.call(inputa)子类型
        MDN 子类型 去查询,就可以看文档办事.

    - Ajax 的流程
        1. 实例化一个XMLHttpRequest 对象
            http://127.0.0.1:5555/lesson_my/js/closuer/1.html 请求的式 html,css,js 空闲状态 为了界面(后端控制 1次)
            拥有js 主动发出http请求的能力 为了数据(前端 n次)
        2. xhr.readyState 0 状态 UNSENT
        3. 打开http链接, 定义Method URL open()
        4. xhr,readyState 0 OPENED
        5 send() 发送请求
        6. xhr.readyState 2 	HEADERS_RECEIVED    服务器端
        7. onreadystatechange 数据到达监听事件
        8. xhr.readyState 3 	LOADING 数据到达过程中
        9. xhr.readyState 4 DONE 拿到完整数据
        10. xhr.responseText 数据

- search suggest 用户体验优化功能
    1. 用户完整的搜索
        降低用户的使用门槛(把用户当小白看),

- 异步问题
    1. 事件keyup
        处理函数内部拿到返回的数据
        不可以通过return拿
    2. ajax 是异步的,js 主线会把它放入event loop
        所以 res undifind,不等了
    3. 提出的方案是?
        回调函数 cb
        解决异步问题

- Promise
    1. 解决异步问题而来
        Promise {pending}   问题没有开始解决 放入 event loop
    2. new Promise((reslove,reject) => {
        reslove
        p fulfilled reslove(传值)
    })
    4. p.then((res) => {

    })
        p reslove后运行res 是调用reslove后的结果