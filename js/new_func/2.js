// 立即运行函数
// window
// this来自外层
(() => {
    // 不会分配this
    console.log(this);
})()