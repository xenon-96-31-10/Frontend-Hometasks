# Задание

Переопределите метод заданного объекта с новой функциональностью при сохранении старого поведения.

Создайте шпиона, который отслеживает, сколько раз функция вызывается.

## Пример

```js
var spy = Spy(console, 'error') // Spy(цель, название метода)

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count) // 3
```

## Аргументы

* target: объект, содержащий `method`
* method: строка с именем метода, который будет отслеживаться.

## Условия

* Не использовать for/while циклы или Array#forEach.
* Не создавать лишние функции.

## Подсказка

* Функции имеют контекст, входящие данные и выходящие. Убедитесь, что вы учитываете контекст, вход *и выход* функции, за которой вы шпионите.

## Шаблон

```js
function Spy(target, method) {
  // SOLUTION GOES HERE
}

var spy = Spy(window, 'alert');
alert('Никто не узнает, что я вызывал алёрт');
console.log('Количество вызванных алертов:', spy.count);
```
