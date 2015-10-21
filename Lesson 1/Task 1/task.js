// your code goes here
var sum = function (a){
    return function(b) {
        return a+b;
    }
}
var a = 1;
var b = -5;
console.log(sum(a)(b));