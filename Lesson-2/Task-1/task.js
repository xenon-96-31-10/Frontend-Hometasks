// your code goes here
var notDuck = Object.create({quack: true})

var duck = {quack: true}
var duck1 = {quack: true}

var ducksArr = [{ quack: true }];

function duckCount() {
    // SOLUTION GOES HERE
    var arr = Array.prototype.slice.call(arguments);
    var arr1 = arr.filter(function(value){
        return value.hasOwnProperty('quack');
    });
    return console.log(arr1.length);
    //console.log(arguments[2].hasOwnProperty('quack'));
}
duckCount(duck, notDuck, ducksArr,duck1); // 2