const bubblsSort = arr => {
    console.time('时间:');
    // 多声明变量,可以让我们放下一些思想
    let tmp = 0; // 记录最后一次交换的位置
    let lastExchangeIndex = 0; // 无序数列的边界
    let len = arr.length;
    let sortBorder = arr.length - 1; // 已排好序的边界
    for(let i = 0; i < len; i ++) {
        let isSorted = true; // 是否可以直接退出?
        // 0 -> sortBorder swap
        for(let j = 0; j < sortBorder; j ++) {
            if(arr[j] > arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                isSorted = false
                lastExchangeIndex = j;
            }    
        }
        sortBorder = lastExchangeIndex
        if(isSorted) {
                break;
        }
    }
    console.timeEnd('时间:')
    console.log(arr);
}
bubblsSort([3,4,2,1,5,6,7,8])