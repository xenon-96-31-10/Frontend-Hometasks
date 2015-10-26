В JavaScript есть такая штука под названием ```'duck typing'```.
Переводится как утиная типизация.
Утиная типизация - это стиль динамической типизации, в которой объект, методы и свойства определяют допустимые семантики,
а не наследование от определенного класса или реализацию определенного интерфейса. Название понятия обозначает "тест утки",
приписываемые Джеймс Уиткомб Райли, который может быть сформулирован следующим образом: "Когда я вижу птицу, которая ходит
как утка и плавает как утка и крякает как утка, я называю эту птицу уткой"


В JavaScript, для того чтобы писать надежные программы мы иногда должны проверить объект на соответствие типа, который нам нужен.

Мы можем использовать Object.hasOwnProperty для обнаружения, если объект имеет свойство, определенное у себя
(т. е. не унаследовал от своего прототипа):
```js
var duck = {
  quack: function() {
    console.log('quack')
  }
}
```
```duck.hasOwnProperty('quack') // => true```
Мы не дали утке метод .hasOwnProperty, откуда он взялся?

Утка была создана через {} синтаксис, и как таковая, отнаследовалась от Object.prototype:
```js
var object = {quack: true}

Object.getPrototypeOf(object) === Object.prototype // => true
Object.hasOwnProperty('quack')                     // => true
```
Но что, если объект не наследуется от Object.prototype?

```js
// создать объект с 'null' прототипом.
var object = Object.create(null)
object.quack = function() {
  console.log('quack')
}

Object.getPrototypeOf(object) === Object.prototype // => false
Object.getPrototypeOf(object) === null             // => true

object.hasOwnProperty('quack')
// => TypeError: Object object has no method 'hasOwnProperty'
```
Мы также можем использовать hasOwnProperty из Object.prototype хотя, если мы вызываем эту функцию в контексте this,
то значение будет что-то вроде "выглядит как объект". Function.call позволяет нам вызвать любую функцию с измененным this.

// Первый аргумент вызова становится значением `this`

// остальные аргументы передаются в функцию последовательно.
```js
Object.prototype.hasOwnProperty.call(object, 'quack') // => true
```

####Задание:
Напишите функцию duckCount, которая возвращает число аргументов, переданных ей, которые имеют свойство `quack`, определенное напрямую.

####Пример:

```js
var notDuck = Object.create({quack: true})
var duck = {quack: true}
var ducksArr = [{ quack: true }];
duckCount(duck, notDuck, ducksArr) // 1
```
Arguments

Вы можете передать от 0 до 20 аргументов в эту функцию. Каждый аргумент может быть любого типа с любыми свойствами.
Некоторые из этих элементов будут иметь `duck` свойство.

####Условия:

Не использовать любой вид цикла, включая Array.forEach.
Не использовать любые счетчики или аккумулирующие значения.
Не создавать любые ненужные функции, такие как функции-помощники.

####Подсказка.
```
`arguments` значение доступно в любой функции. Это объект, который крякает как массив.
 {
  0: 'argument0',
  1: 'argument1', // etc
  length: 2
}
```
####Ресурсы в помощь

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments

####Шаблон:

```js
function duckCount() {
  // SOLUTION GOES HERE
}
```
