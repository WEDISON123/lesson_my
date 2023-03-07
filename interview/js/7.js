// shallow 浅
const shallowClone = (target) => {
    // 排除 null  
    if(typeof target === 'object' && target != null) {
        const cloneTarget = Array.isArray(target) ? [] : {} // 新的拷贝
        for(let prop in target) { // 不管是 object 还是 array 都可以 for in 遍历 性能不如 计数循环
            if(target.hasOwnProperty(prop)) { // 自己的不是原型链上的
                cloneTarget[prop] = target[prop] // 拷贝
            }
        }
        return cloneTarget
    }else {
        // null 或简单数据类型
        return target
    }
}

