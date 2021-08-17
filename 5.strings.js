// * запись строки
// чтобы переменная вернула тип данных string - ее знач дб заключено в кавычки

// обратные кавычки позвол встаивать в строку доп функцианал

let myName = 'Ivan';
let myAge = 22;
console.log(`Hello, im ${myName}, my age is ${myAge}`);

//* строковое преобразование
// с пом спец функции string можно изменить тип данных на строковый

let myAge = 22; // тип данных number
let myTrue = true; // тип данных boolean
console.log(myAge); //22
console.log(typeof myAge); // number
console.log(myTrue); // true
console.log(typeof myTrue); //boolean

myAge = String(myAge);

// * работа с символами строки
// ** свойство lenght
// позвол получить длину строки, возвр кол-во символов

let parrot = '38 попугаев';
console.log(parrot.length); // возвр число 11

// * получение символа по индексу
// индексация символов нач с нуля

let parrot = '38 попугаев';
console.log(parrot[3]); // возвр п

// если нужно получить посл символ в строке произв длины
let parrot = '38 попугаев';
console.log(parrot[parrot.length - 1]); // возвращ 'в'

// * изменение регистра
// toUpperCase() метод позвол измен регистр на верхний
let parrot = '38 попугаев';
console.log(parrot.toUpperCase()); // возвр '38 ПОПУГАЕВ'

// * toLowerCase() позв изменить регистр на нижний

// * поиск в строке
// ** .indexOf(substring, position)
// .indexOf (текст подстроки, позиция). Возвращает -1 если совпадений не найдено
let parrot = '38 попугаев';
console.log(parrot.indexOf('попуг')); // 3 (это позиция с которой нач совпадение)
console.log(parrot.indexOf('попуг', 6)); // -1 (совпадений начиная с 6ой позиции не найдено)

// ** .includes(substring, position)
// .includes (текст подстроки, позиция) возвр true если есть совпадения, false если нет
let parrot = '38 попугаев';
console.log(parrot.includes('попуг')); // true
console.log(parrot.includes('попуг', 6)); // false - начиная с 6ой позиции совпадений не найдено

// * метод slice
// slice(start,end) возвр строку со start до end (не включая)
let parrot = '38 попугаев';
console.log(parrot.slice(3)); //возвр подстроку 'попугаев'
console.log(parrot.slice(1, -1)); // -//- '8 попугае'
