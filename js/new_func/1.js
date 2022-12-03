var stuA = {
    name: 'cai'
}

var stuB = {
    name: 'liu'
}

function sayHi(...args) {
    console.log(arguments,...args);
    console.log(`你好我是${this.name}`);
}

// stuA,stuB 都能sayHi
// call 改天换地，手动指定this 的指向
// this -> 调用对象stuA，stuB
// sayHi.call(stuA);
// // sayHi.call(stuB);
// Object.prototype.sayHi = sayHi;
// stuA.sayHi();

sayHi.apply(stuB,[1,2]);
sayHi.call(stuB,1,2);


// var func = sayHi.bind(stuB); 
// func();