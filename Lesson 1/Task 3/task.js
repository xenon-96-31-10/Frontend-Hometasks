// your code goes here
var users = [{
    name: "Вася",
    surname: 'Тестов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];
//'function(a, b) { return a.'+ field + ' > b.'+ field +' ? 1 : -1;}'

var byField = function(field){

        return function(a, b) { return a[field] > b[field] ? 1 : -1;};
}

// по полю name (Вася, Маша, Петя)
users.sort(byField('name'));
users.forEach(function(user) {
    alert( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
    console.log( user.name );
}); // Маша, Вася, Петя

