// your code goes here
var arr = [1, 2, 3, 4, 5, 6, 7];
function filter(arr, func){
    var arr0  =[];
    arr.forEach(function(item){
        if(func(item)==true){
            arr0.push(item);
        }
    });
    return arr0;
};
function inBetween(a,b){
    return function(item){
        if((a<=item)&&(item<=b)){
            return true;
        };
    }
};

function inArray(arr1){
    return function(item){
            arr1.forEach(function(item1) {
                if (item1 == item) {
                    return true;
                }
            })
    };
}
function sumOf(arr2){
    var a =0;
    arr2.forEach(function(item){
        a+=item;
    });
    return a;
}
/*alert(filter(arr, function(a) {
    return a % 2 == 0
})); // 2,4,6*/

//alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
//alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
alert( sumOf([1, 2, 10, -13]) ); // 0

