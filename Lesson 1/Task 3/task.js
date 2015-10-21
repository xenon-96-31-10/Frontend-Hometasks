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
    if(field='name'){
        return function(a, b) { return a.name > b.name ? 1 : -1;};
    }
    if(field='age'){
        return function(a, b) { return a.age > b.age ? 1 : -1;};// �� ����� ���� age ������� users
    }

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

