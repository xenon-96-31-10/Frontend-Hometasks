// your code goes here.
//var elements = document.body.querySelectorAll("div, h1, p");
//for( var i = 0; i<element.length;i++){
    //elements[i].classList.add("prettify");
//}

var elements = document.body.querySelectorAll("*");
/*element.onclick = function() {
    alert("2");
}*/
var count =0;
function fn() {
    console.log(this.nodeName);
}

for(var i=0; i < elements.length; ++i){
    elements[i].addEventListener('click', fn, true);
}