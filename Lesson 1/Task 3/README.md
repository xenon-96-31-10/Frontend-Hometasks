# Lesson 1
## Task 3

### Задание: Сортировка
У нас есть массив объектов:

```js
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
```
Обычно сортировка по нужному полю происходит так:
```js
// по полю name (Вася, Маша, Петя)
users.sort(function(a, b) {
  return a.name > b.name ? 1 : -1;
});

// по полю age  (Маша, Вася, Петя)
users.sort(function(a, b) {
  return a.age > b.age ? 1 : -1;
); 
```

Нужно упростить до следующего:
```js
users.sort(byField('name'));

users.forEach(function(user) {
  alert( user.name );
}); // Вася, Маша, Петя


users.sort(byField('age'));

users.forEach(function(user) {
  ( user.name );
}); // Маша, Вася, Петя
```

То есть, вместо того, чтобы каждый раз писать в sort function... — будем использовать byField(...)

Напишите функцию byField(field), которую можно использовать в sort для сравнения объектов по полю field, чтобы пример выше заработал.

***Решение должно быть в файле task.js.***