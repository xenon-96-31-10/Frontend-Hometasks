// your code goes here.
var element = document.querySelectorAll("div, h1, p");
for( var i = 0; i<element.length;i++){
    element[i].classList.add(".prettify");
}
console.log(element[0].classList);
