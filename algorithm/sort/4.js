const bubbleSort = arr => {
    // 函数的局部变量
    console.time('冒泡排序耗时');// 时间计算
    const length = arr.length; // 缓存数组长度 变量
    // 相邻 一趟循环一位置的顺序是对的交换? 最右侧一定是最大值
    
    for(let i = 0; i < length - 1; i ++) { // 
        // 所有元素排序 位置放置正确的数字
        let isSorted = true; // 本轮有序吗?
        for(let j =0; j < length - i - 1; j ++) {// 内循环 排号一个位置后
            if(arr[j] > arr[j + 1]) {
                // const temp = arr[j];
                // arr[j] = arr [j+1];
                // arr[j] = temp;    
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isSorted = false;
            }     
        }
        if(isSorted){
                // 一次都没发生
                break;
            }
    }
    console.timeEnd('冒泡排序耗时');
}
// 全局中
const arr = [5,8,6,3,9,2,1,7]; // 引用是赋值 堆内存 值决定

bubbleSort(arr);
console.log(arr);