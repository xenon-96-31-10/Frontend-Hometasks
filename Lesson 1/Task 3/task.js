// your code goes here
var users = [{
    name: "����",
    surname: '������',
    age: 20
}, {
    name: "����",
    surname: '������',
    age: 25
}, {
    name: "����",
    surname: '���������',
    age: 18
}];
//'function(a, b) { return a.'+ field + ' > b.'+ field +' ? 1 : -1;}'

var byField = function(field){

        return function(a, b) { return a[field] > b[field] ? 1 : -1;};
}

// �� ���� name (����, ����, ����)
users.sort(byField('name'));
users.forEach(function(user) {
    alert( user.name );
}); // ����, ����, ����

users.sort(byField('age'));
users.forEach(function(user) {
    console.log( user.name );
}); // ����, ����, ����

