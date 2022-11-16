let word = 'how are you doing ee oday';
const arr = word.split(' ');


var x = arr[0].length;
for(var i = 0; i < arr.length; i ++) {
    if(x >= arr[i].length) {
        x =arr[i].length;
    }
}
console.log(x);