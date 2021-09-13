//* Тестирование Jest
// обычно, когда мы пишем функцию, мы легко можем представить что она должна делать и как она будет вести себя в зависимости от переданных параметров
// Во время разработки мы можем проверить правильность работы функции просто вызвав ее
// например из консоли и сравнить получеенный рез-т с ожидаемым
// При тестировании кода ручными перезапусками легко упустить важное

// Jest - это фреймворк для тестирования js-кода
// Работает с проектами TypeScript, Node, React, Angular, Vue и др

// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// -------

// sum.test.js
const sum = required('./sum.js');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// .toBe() - проверяет на точное равенство
// .not.toBe() - противоположность равенству

// Jest - логические значения

//.toBeNull() соответствует только null
// .toBeUndefined() соотв только undefind
// .toBeDefined() явл противоположностью toBeUndefined
// .toBeTruthy() соотв всему что if конструкция рассматривает как true
// .toBeFalsy() соотв всему что if конструкция рассматривает как false

// Jest - числа
// expect(value).toBeGreaterThan(3); ожид value больше 3
// expect(value).toBeGreaterThanEqual(3.5); ожид value >=3.5
// expect(value).toBeLessThan(5);   <5
// expect(value).toBeLessThanOrEqual(4.5);  <=4.5

// для сопоставления строк с регул выражениями исполь .toMatch
// сод ли массив или объект конкретн значение, использ .toContain

{
    "name": "jest-training",
    "version": "1.0.0",
    "description": "Jest intro",
    "main": "index.js",
    "scripts": {
      "test": "jest"
    },
    "keywords": [
      "jest",
      "testing"
    ],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "jest": "^26.0.1"
    },
    "dependencies": {
      "axios": "^0.19.2"
    }
}  