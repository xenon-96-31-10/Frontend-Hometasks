function makeBuffer() {
    // your code goes here
    var Counter="";
    function buffer(counter){
        if(counter == undefined)
        {
            return Counter;
        }else{
            Counter += counter;
            return Counter;
        }
    }
    buffer.clear = function(){
        Counter="";
    }
    return buffer;

}

var buffer = makeBuffer();

/* добавить значения к буферу */
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

/* получить текущее значение */
alert( buffer() ); // "Замыкания Использовать Нужно!"

buffer.clear();

alert( buffer() ); // ""