- 你知道CSS变量吗？
    - css 4（next） 新功能
    - 复用一些变量，全局修改一次，所有地方都相应修改
    - :root 根选择器
    - --blur 命名风格 --
    - var(--blur) 使用它
    - js 来修改 docu,ent.documentElement.style.setProperty('---blur','')
- HTML5 考点
    - 本地存储 localStorage
    - 语义化 section footer header article SEO
    - FORM 的新控件
        使用更丰富的标摊控件，通过type的设置， 更加方便手机用户信息
        input type="text | number | range | color"
    - 拖拽能力 html5

- 消息提醒组件的样式逻辑
    css变量 好处可以自身解决 样式逻辑
    1. 0 sup 隐藏
    2. > 0 显示
    3. sup 宽度是变量
    4. 99+ 怎么做？

- 不依赖js css 变量独自解决了样式逻辑
    性能
- .style.setProperty('var_name',value)
    可以创造更加丰富的界面特效