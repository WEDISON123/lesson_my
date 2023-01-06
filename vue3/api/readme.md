# 为什么喜欢vue ？

    - 丰富的指令
        v-if(unmounted) v-show(display:none)
        v-model 双向绑定
        v-on:click 
        v-bind:
        v-html 输出含有html的内容
        vue 默认会把html转为字符来显示，而不会转译成真正的html
        肯定有原因？
    - 修饰符，真的爽
        @click.prevent
        @submit.prevent
        @keydown.enter
    - 计算级属性    computed
        view 更纯粹，可读性更好
        帮助我们缓存计算结果，当data 发送改变的时候，
        如果，我们不要计算属性，用的是表达式的化，
        就算是无关的数据，也会重新计算渲染

    - v-model 确实好用
        input 开销 性能不好     change? 
    - computed 与watch 区别
        1. computer属性 一定要有返回值
        2. watch 只是监听，
        3. computed 在mounted 自动执行一次
            而watch只有在数据改变的时候才会执行