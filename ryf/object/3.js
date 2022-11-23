// 生成一个对象

// var cat = {
//     name: '',
//     color: ''
// }

// var cat1 = {}; // 创建一个空对象
// cat1.name = "大毛"; // 按照原型对象的属性赋值
// cat1.color = "黄色";
// var cat2 = {};
// cat2.name = "二毛";
// cat2.color = "黑色";

// function Cat(name,color) {
//     return {
//         name:name,
//         color:color
//     }
// }

function Cat(name,color){
    this.name=name;   
    this.color=color;   
}

var cat1 = new Cat("大毛","黄色");
alert(cat1.name); // 大毛
var cat2 = new Cat("二毛","黑色");