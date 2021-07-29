// запись числа
// тип данных number может принимать целые числа и числа с плав. запятойы

let myAge = 22;
let myHeight = 1.79;

// большие числа можно разд нижним подчеркив для большей читаб
let number = 1_000_000; 


// * Округление числа
// ** Math.floor
// imp: округляет число в меньшую сторону

let numOne = Math.floor(5.8);  // 5
let numTwo = Math.floor(2.2);  //2
let numThree = Math.floor(-2.2)  //-3

// * Math.ceil
// округляет число в большую сторону


let numOne = Math.floor(5.8);  // 6
let numTwo = Math.floor(2.2);  // 3
let numThree = Math.floor(-2.2) //-2

// * Math.round
// округл число до ближ целого

let numOne = Math.floor(5.8);  // 6
let numTwo = Math.floor(2.2);  // 2
let numThree = Math.floor(-2.2) //-2

// ** Метод toFixed(n)
// округл число до n знаков после запятой, но возвращает СТРОКОВЫЙ результат

let numOne = 5.845;
console.log(numOne.toFixed(1)); // строку 5.8
console.log(+numOne.toFixed(1)); // число 5.8

// * функция isNaN
// проверяет выражение на знач NaN (возвр true или false)
// сложение числа со строкой возвр NaN

console.log(isNaN(38 + "попугаев")); // возвр true
console.log(isNaN("попугаев" + 38)); // возвр true
