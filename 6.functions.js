//  * объявление функции (Function declaration)
// вызвать такую функцию можно как до так и после объявления самой функции !!!

// function(параметр, параметр... ) { тело функции }

function showMessage(myName, myMessage) {                 // объявление функции
    console.log(`${myName}, ${myMessage} my friend)`);    // вывод приветствия
}
showMessage('laura', 'hello');                        // вызов функции

// переменная объявленная внутри функции наз локальной, за пределами своей функции отна не видна
function showAge() {
    const myAge = 22;  // объявление локальной переменной
}
console.log(myAge); // ошибка

// * директива return
// использ для вывода результата работы функции
// когда код встречает return - функция возвращает результат и код дальше не выполняется

// * функциональные выражения (function expression)
// вызвать такую функцию можно только после ее объявления
const showAge = function(age) {
    console.log(`my age is ${age}`);
}
showAge(18); // "my age is 18"

// * стрелочная функция (arrow function)
// const имя переменной = (параметр, параметр, ...) - тело функции
const showMessage = (myName, myMessage) => `${myName}, ${myMessage} my friend`; // заменяет собой директиву return

console.log(showMessage("Anna", 'hello')); //возвр строку "Anna hello my friend"
// для многострочной функции нужны фигурные скобки и директива return

const showMessage = (myName, myMessage) => {
    return `${myName}, ${myMessage} my friend`;
}                                             

console.log(showMessage('Anna', 'hello'));   // "Anna hello my friend"







// задача
const sayHello = (name) => {
    if (typeof name !== string) return;
    if (name.toUpperCase() === 'MARK'){
    return "I love you";
    } else {
        return 'Hello';
    }
}
console.log(SayHello(" "));