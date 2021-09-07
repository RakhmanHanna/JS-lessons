// * Рекурсия
// это прием программирования в полезных ситуациях, когда задача может быть естественно разделена на неск аналогичных
// но более простых задач
// или когда задача можнт быть упрощена до несложных действий

// Рекурсивной функцией обычно наз функцию, кот вызывает сама себя
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// * Замыкание (чтение внешних переменных)
// замыкание - это функция, которой доступны переменные из области видимости др функции
// обычно для создания замыкания одну функцию определяют внутри другой

function makeCounter() {
    let count = 0;
    return function () {
        returt count++;
    }
}
let counter = makeCounter();

console.log(counter); 

// замыкание всегда получает посл значение любой переменной из внешней функции


// * setTimeout
//позвол вызвать функцию 1 раз через определ интервал времнени
function sayHi(phrases, who) {
    alert(phrase + ', ' + who);
};
setTimeout(sayHi, 1000, 'Hi', 'Jhon');
setTimeout(() => alert('Hi'), 1000);


// * clearTimeout
// возвращ идентификатор таймера timerId, кот можно использ для отмены дальнейшего выполнения
let timerId = setTimeout(() => {});
clearTimeout(timerId);

// * setInterval
// повторить с интервалом 2 сек
 let timerId = setInterval(() => alert('Tick'), 2000);
// остановить вывод через 5 сек
setTimeout(() => {
    clearInterval(timeId);
    alert('Stop!');
}, 5000);


//задача 1 
// Напишите функцию printMessage(n), которая выводит сообщение на экран каждые n-секунд

const printMessage = (n) => {
    setInterval(() => alert('hi'), n * 1000);

    //задача 2
    // Напишите функцию, кот выводит через 5 сек на экран соббщение 'прошло 5 секунд'
    const fiveSecondsAgo = () => {
        setTimeout(() => console.log('прошло 5 секунд'), 5000);
    };

//задача 3
// напишите функцию printNumbers(from, to) которая выводит число каждую секунду, начиная от from заканчивая to
    const printNumbers = (from, to) => {
        let current = from;
        setTimeout(function go(){
            console.log(current);
            if (current < to) {
                setTimeout(go, 1000);
            };
            current++;
        }, 1000);
    }

    printNumbers(2, 8);

    //* Сall, apply
    // Оба метода вызывают функцию с конкретным аргументом this
    // задавая значение объекта this в теле функции
// метод apply() принимает два аргумента: значение this внутри функции и массив аргументов

// sum.call(this, arg1, arg2);
// sum.apply(this, [arg1, arg2]);

// * Call

function sayHi() {
    alert(this.name);
}
let user = { name: 'John'};
let admin = { name: 'Admin'};

sayHi(); // возвращ undefind
sayHi.call(user); // John
sayHi.call(admin); // Admin


// * Apply
// Единственная разница в синтаксисе между call и apply состоит в том, что call ожидает список аргументов
// в то время как apply принимает псевдомассив
