### Задание

Напишите функцию, которая позволяет вам использовать `Array.prototype.slice` без использования `slice.call` или `slice.apply`.

Обычно функция slice используется вместе с call или apply.

```js
var slice = Array.prototype.slice

function() {
  var args = slice.call(arguments); // это работает
}
```

Я хочу, чтобы работало это:

```js
var slice = yourFunction;

function() {
  var args = slice(arguments); // это работает
}
```

#### Пример

Поведение slice функции:

```js
var nums = [1,2,3,4,5];

// Ваша slice функция должна действовать также, как обычная 
// за исключением того, что вы в свою функцию передаете первым аргументом массив.

slice(nums, 0, 2); // [1, 2]
slice(nums, 1, 2); // [2]

// обычное использование slice для сравнения
nums.slice(0, 2); // [1, 2]
nums.slice(1, 2); // [2]
```

#### Условия

* Не использовать for/while циклы или Array#forEach и другие перебирающие методы.
* Не использовать слово `function` :D

#### Подсказки

* Решение в одну строку.
* Каждая JavaScript Function наследует методы, такие как call, apply и bind из объекта `Function.prototype`.
* Function#call. Внутри `someFunction.call()`, значение `this` будет `someFunction`.
* Function.call сама функция, таким образом, она наследуется от `Function.prototype`.
```js
function myFunction() {
  console.log('called my function');
}

Function.prototype.call.call(myFunction); // => "called my function"
```

#### Ресурсы
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

#### Шаблон

```js
var slice = //solution here!

function testCase() {
  var args = slice(arguments, 1, 3); // это работает
  console.log(args);
}

testCase(1, 2, 4); // [2, 4]
testCase(1, 1, 1); // [1, 1]
testCase(1, ['a', function () { }], 1, 1, 4, 5, 7, -100); // [Array[2], 1]
testCase(); // []
```
