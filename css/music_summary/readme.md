# 大厂Html5 作品赏析

- html5 标签
    audio 网易云音乐
    video 爱奇艺 B站

- background-size
    1. 移动端rem w h 是多变的 而pc端没有这个问题
    2. 移动端 retina 3倍retina
        40×40 80x80 120x120 200x200
    3. background-size: cover 背景图片大小
        等比例缩放背景图片填满容器
        超出则剪裁
        contain 

- 库文件引入位置
    1. css 放到head 里
        css 应该尽早参与网页的渲染
        
    2. JS放在body最下面， 会阻塞页面渲染

- swiper 滑动组件库的使用
    1. 引入组件库
        js css 
    2. 固定的html结构
        .swiper-container(滑动区域的大小)>.swiper-warpper>.swiper-slide
    3. new Swiper(Selector,{
        direction: ''
    })

- translate3d(-50%,0,0) 3d 启动3d加速器 GPU渲染
    translate(-50%,0)   2d
    效果一样

- 使用linear-gradient生成背景图片
    1. 颜色渐变图片 #f8ddd1,#faece5 73%,#fad2c0
        colorStop
    2. 性能优化， 图片下载较大
        css 写的，
        img src 下载 + 显示
    3. 下载越多，http 并发数就越多，卡顿越明显
        马路
    