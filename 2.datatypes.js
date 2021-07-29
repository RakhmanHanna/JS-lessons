undefined //ищет значения, а не переменную
null
Boolean
Number
BigInt
String
Symbol
Object
Function

// * undefined 
// Неопределенный тип
// important: Переменная вернет ndefined если она была объявлена, но не определена.

 let userName //Переменная объявлена, но не определена (не присвоено знач)
 console.log(typeof userName); //возвращ тип данных undefined
 console.log(userName); //возвр значение undefined

 // * Null
 // Представляет собой ничего (пустое место)
 //important: Переменная возвращающая null определена, но ее знач пустое.
 //important: Тип данных null сод только одно знач - null.
 // warning: оператор typeof переменной со знач null возвр тип данных - object.

 // * Boolean
 // Логический (булевый) тип данных
 // important: Тип данных Bollean может принимать 2 знач: true, false.

 let trueOrFalse = 60 < 10;
 console.log(rueOrFalse);    // возвращ false

 //important: Можно использовать для проверки

 let willYouMerryMe = true;   //Переменная объявлена и явл true
 if (willYouMerryMe) {        //Если условие willYouMerryMe выполняется - возвращается true
     console.log(yes);
 } else {
     console.log(no);
 }

 // * Number
 // Числовой тип данных
 // important: Тип данных может принимать целые числа и числа с плавающей запятой

 let myAge = 22;
 let myHeight = 1.79;

 //warning: Спец значения infinity и -infinity
 let getInfinity = 58 / 0;
 let getMinusInfinity = -58 / 0;
 console.log(etInfinity); //возвращает знач Infinity
 console.log(typeof getInfinity); // возвращает number
  // warning: спец знач Nan (not a number)
  // результат неправильной матем операции

  let getNan = 'string' / 10;  
  console.log(getNan);   // возвращает NaN
  console.log(typeof getNan);  //возвращает number

  //important: NaN уникальное значение и никогда не равно NaN

  console.log(NaN === NaN);   // возвращает false

  // * BigInt
  // Числовой тип данных, может содержать числа произвольной длины
  // important: правила синтаксиса - к числовому литералу добавляется символ n в конце
  const bigInteger = 123456789858995n;

  // * String
  // строковый тип данных
  //important: Чтобы переменная вернула тип данных string, ее знач дб заключено в кавычки
  //warning: одинарные или двойные кавычки явл простыми, между ними нет разницы

  let myFullName = 'Anna Rakhman'   // знач переменной заключ в одинарн кавычки
  console.log(myFullName);          // возвр Anna Rakhman
  console.log(typeof myFullName);   // возвр string

  //warning: Обратные кавычки позволяют встраив в строку доп функцианал
  let myAge = 22;
  let myName = 'Ivan';
  console.log(`Hello, I'am ${myName}, my age is ${myName}`); // Возвращает строку Hello, I'am Ivan< my age is 22

  // * Object
  // Объект сод более сложную структуру данных
  // important: Объект может быть создан с пом фигурных скобок и содержить набор необязат свойств
  // important: Свойство сост из пары - ключ: значения, запятыми отделяются свойства между собой

let myInfo = {
      name: 'Ivan',
      age: 22
  }
console.log(myInfo); //возвращ {name: 'Ivan', age: 22}
console.log(typeof myInfo); // возвр object

// Преобразование типов
// Строковое 
//imp: с пом спец функции string можно изменить тип данных на строковый

let myAge = 22;     //тип данных Number
let myTrue = true   //тип данных boolean
console.log(myAge); // 22 тип number
console.log(myTrue); //тип boolean

myAge = String(myAge) //
console.log(myAge);  // возвр 22 с типом string

//Численное
//imp: с пом функции Number можно изменитиь тип данных на числовой

const myAge = '22'; // тип данных string
console.log(myAge); //возвращ строку 22

myAge = Number(myAge);
myAge = +myAge; // краткое преобразов в числовой тип данных

// warning: если в строке нет чисел? результатом будет NaN (сломанное число)
let myName = 'Ivan'; // тип данных string
myName = Number(myName); //преобр строк тип данных в числовой
console.log(myName);  //вернет NaN
console.log(typeof myName); //вернет Number

// * Логическое преобразование
// imp: с пом спец функции Boolean() можно измениить тип данных на логич

let myAge = 22;  // тип данных number - true
let myAge = 0;   // тип данных number 
let myAge = '0'  // тип данных string 
let myAge = '';  // тип данных string 
let myAge = ' ';  // тип данных string 


myAge = Boolean(myAge);
console.log(myAge);  
