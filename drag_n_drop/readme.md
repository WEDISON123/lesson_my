# html5 拖拽效果

- github 提供了 拖拽提交代码,
drag 文件
drag over 元素区域的上空
drag end 放开

- 资源加载的顺序
1. css 放在头部 ,js放在尾部
 DOM树 +cssO M 下载并执行 生成渲染树 ,快速显示页面 
 优先
 2. js 执行会修改 DOM document.write
 下载和执行 堵塞 document.createElment
 3. script 又可以放在 head defer/async

 - 浏览器(c++和java)  不是js js只是浏览器的一部分
    js 是单线程
    defer 后台加载js 启动多线程 不会阻塞文档下载
     async 推迟
 - js 要尽快执行,页面可以最快速度的进入交互状态
 DOMContentLoaded 比 onload 更合适 img video 资源下载 onload      
 async 和defer 都不会影响静态页面的渲染, 但是 defer 会很好的解决 执行顺序的问题,以来问题
 async 如果不依赖,文件的交互会更快实现

 - 盒子模型计算公式
    box-sizing 更改计算方式 IE盒子模型     标准盒子模型
    box-sizing:border-box; 切换到IE盒模型的方式 w= 内容+padding+ border    

    现代浏览器默认使用标准盒模型
    360 如果本地安装了Chrome webkit ,IE老版本 ,ie
    edge 不再是老的IE 仍然使用标准柜盒模型
    IE6/7/8 老的,已经退出了历史舞台
    
    IE盒模型 移动端动态分配内容,padding border 的列布局中
    相当简单
    
    没有小数点px 物理元器件 ,发光源1px=1个发光源
                      