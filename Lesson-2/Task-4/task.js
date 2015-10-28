// your code goes here
var slice = Function.prototype.call.bind(Array.prototype.slice);

    function testCase() {
        var args = slice(arguments, 1, 3); // это работает
        console.log(args);
    }
testCase(1, 2, 4); // [2, 4]
testCase(1, 1, 1); // [1, 1]
testCase(1, ['a', function () { }], 1, 1, 4, 5, 7, -100); // [Array[2], 1]
testCase(); // []