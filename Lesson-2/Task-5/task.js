// your code goes here
function Spy(target, method) {
    // SOLUTION GOES HERE
    count: 1;
}

var spy = Spy(window, 'alert');
//alert('Никто не узнает, что я вызывал алёрт');
console.log(spy.count);
//console.log('Количество вызванных алертов:', spy.count);