### Задание

Создайте тип "BetterUser", который расширяет "User" и перегружает `.toString` метод.

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
}

/**
 * @return {String} Formatted name & title
 */

User.prototype.toString = function() {
  return '[User:'+this.displayName()+']';
}
```

#### Пример

```js
var joe = new BetterUser('Mr.', 'Joe Smith'); // передаем заголовок и имя.
console.log('Hello ' + joe); // 'Hello [BetterUser: Mr. Joe Smith]'
```

#### Условия

* Не вызывать конструктор User лишний раз.
* Не использовать `__proto__`
* Не создавать другие функции.

#### Помощь

* http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/
* http://tobyho.com/2011/11/11/js-object-inheritance/
* http://hughfdjackson.com/javascript/2012/01/05/prototypes:-the-short%28est-possible%29-story/

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
