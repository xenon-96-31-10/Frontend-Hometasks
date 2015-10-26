### Задание

Сделайте предыдущее задание без Object.create!

Детали скопированы из прошлого задания.

#### Условия

* Не вызывать конструктор User лишний раз!
* Не использовать `Object.create`.
* Не использовать `__proto__`

#### Подсказки

* Прототипы это всегда объекты.
* Поймите что делает `Object.create`.

#### Ресурсы

* http://www.bennadel.com/blog/2184-Object-create-Improves-Constructor-Based-Inheritance-In-Javascript-It-Doesn-t-Replace-It.htm

```js
/**
 * User Constructor.
 *
 * @param title {String} Title for User, e.g. 'Mr.', 'Mrs.', 'Dr.', etc.
 * @param name {String} Name of User e.g. 'John Smith'
 */

function User(title, name) {
  this.title = title;
  this.name = name;
  console.info('NEW USER: ' + this);
}

/**
 * Creates full display name for a user.
 * @return {String} Display name
 */

User.prototype.displayName = function() {
  return this.title + ' ' + this.name;
};

/**
 * @return {String} Formatted name & title
 */

User.prototype.toString = function() {
  return '[User: '+this.displayName()+']';
};
```

#### Пример

```js
var joe = new BetterUser('Mr.', 'Joe Smith');
console.log('Hello ' + joe); // 'Hello [BetterUser: Mr. Joe Smith]'
```

#### Шаблон

```js
// User is a constructor
function upgradeUser(User) {

  // EDIT THESE AS NECESSARY
  function BetterUser() {

  }

  return BetterUser;
}
```
