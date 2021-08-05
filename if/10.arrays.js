// объявление массива
let newArray = new Array();
let newArray = [];

// синтаксис
// заполняется мвссив значениями(элементами) через ,

new simpleArray = [1, 2, 3];
let newArray = [
    1,
    2,
    3,
    '4',
    '5',
    true,
    false,
    function () {
        console.log('hello world');
    }
];

// * получение значения

let newArray = [
    'Solo',  // 0я позиция
    'Dread',  // 1я позиция
    'Nexus',  // 2я позиция
    'Ns',    // 3я позиция
];
console.log(newArray[0]);  // Solo
console.log(newArray[3]);  // Ns
console.log(newArray[15]); // underfind

// * длина массива
// длина массива = количеству элементов

let newArray = [
    'Solo',  
    'Dread', 
    'Nexus',  
    'Ns',   
];
console.log(newArray.lenght); // 4 (так как 4 элемента)

// доступ к массиву
// spread -  оператор для копирования значения другого массива
const firstArray = [1, 2, 3, 4];
// при присваивании массиву другой массив, копируется ссылка на него, а не его значение
const secondArray = firstArray; // присваивает ссылку на значение исходного массива
                                // при изменении secondArray будет изменяться и firstArray
// для того чтобы скопировать значение исх массива, а не его ссылку, использ spread оператор котор указали выше
const thirdArray = [...firstArray] // spread-оператор, копирует значение исх массива firstArray

// редактирование массива
// изменение значения
let newArray = [
    'Solo',  // 0я позиция
    'Dread',  // 1я позиция
    'Nexus',  // 2я позиция
    'Ns',    // 3я позиция
];
newArray[3] = 'Flash';
console.log(newArray);  // возвр [solo, dread, nexus, ns]

//добавление значений
newArray[4] = 'Хвост';
console.log(newArray); // возвр [solo, dread, nexus, ns, хвост]

// методы массивов
// push - добавление в конец массива
let party = ['solo', 'dread', 'nexus'];
party.push('ns'); // доб в конец массива ns
console.log(party); // возвр [solo, dread, nexus, ns]

// shift - удаление первого элемента в массиве
// добавление первого элемента в массивы
// второй элемент стал первым
let party = ['solo', 'dread', 'nexus'];
party.shift();
console.log(party); // dread, nexus

// pop - удаление послед элемента в массиве
let party = ['solo', 'dread', 'nexus'];
party.pop();
console.log(party); // solo , dread

// unshift -  добавление элемента в начало массива
let party = ['solo', 'dread', 'nexus'];
party.unshift('ns', 'flesh');
console.log(party);  // возвр [ns, flesh, solo, dread, nexus]

// Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращ его номер, если найдено, или -1, если не найдено
// find([1,2,3,4,5], 4);

let arr = [1,2,3,4,5];
for (let i = 0; i<=Array.lenght; i++); {
    if (value === array[i]) return i;
}
return -1;

// Редактирование элементов массивов
// метод splice
// Позволяет удалять / добавлять / изменять элементы массива.
// Метод splice измен исх массив !!!

// *** Удаление элемента
let party = ['Solo', 'Dread', 'Nexus'];
// party.splice(индекс, кол-во элементов)
 party.splice(1, 1) //начиная с первой позиции удаляет 1 элемент
console.log(party); // 'Solo', 'Nexus'

//также можно использ отриц знач метода splice

let party = ['Solo', 'Dread', 'Nexus'];
party.splice(-1,1); // начиная с первой позиции с конца удаляет один элемент
console.log(party); // Solo, Dread


// *** удаление элементов с сохранением их в переменную
let party = ['Solo', 'Dread', 'Nexus'];
let newParty = party.splice(1,1); // начиная с первой позиции удаляет 1 элемент
console.log(newParty);  //'Dread'

// *** Замена элемента массива другим элементом
let party = ['Solo', 'Dread', 'Nexus']; 
// party.splice(индекс, кол заменяемых элементовб нов элемент)
party.splice(1,1,'NS')
console.log(party); // Solo, NS, Nexus

// *** Добавление элементов
let party = ['Solo', 'Dread', 'Nexus'];
// party.splice(индекс, 0 - означает добавление, новые элементы)
party.splice(1,0,'NS','Flash'); //начиная с первой позиции добавляет один элемент
console.log(party); // Solo, NS, Flash, Dread, Nexus

// *** Метод slice
// создает нов массив? в который дублирует часть изнач массива либо весь массив
// * Копирование части массива
let party = ['Solo', 'Dread', 'Nexus'];
// psrty.slice(индекс нач позиции, индекс конечн позиции не включая)
let newParty = party.slice(1,2); // копир начиная с первой позиции до второй позиции не включая
console.log(newParty); // Dread
// можно использ отриц знач, отсчет будет идти справа налево

let party = ['Solo', 'Dread', 'NS', 'Nexus'];
let newParty = party.slice(1,-1);  // копир начиная с перволй позиции до последней не включая
console.log(newParty); // Dread, NS


// ** Копирование всего массива
let party = ['Solo', 'Dread', 'Nexus'];
let newParty = party.slice(); // не принимает никаких значений, полностью дублирует массив
console.log(newParty); // 'Solo', 'Dread', 'Nexus'


// ** метод concat
// создает дубль массива, может дополнять новыми значениями
let party = ['Solo', 'Dread', 'Nexus'];
let newParty = party.concat('Flash'); //создает новый массив, копируя все значения и добавляя новые в конец
console.log(newParty); // 'Solo', 'Dread', 'Nexus', 'Flash'

// Аналогичный результат, но с использованием spresd
let newParty = party(...party,'Flash'); 
console.log(newParty); // 'Solo', 'Dread', 'Nexus', 'Flash'

// ** метод sort
// сортирует массив, меняя в нем порядок элементов (по алфавиту)
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
console.log(party.sort()); //  'Dread','Nexus' 'NS', 'Solo', 

// для сортировки можно использ стрелочную функцию
let numberArray = [1,4,2,5,3];
console.log(umberArray.sort((a, b) => a - b));

// ** метод reverse
// меняет порядок в массиве на обратно
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
console.log(party.reverse()); // Nexus NS Dread Solo


// *** Метод map
// вызывает функцию для каждого элемента массива и возвращает НОВЫЙ МАССИВ (и ничего больше) с рез-ом выполнения функции
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
//party.map(элемент массива, индекс, сам массив) => {})
let newArray = party.map(item => item[0]); // возвращ первую (0 индекс) букву каждого элемента массива
console.log(newArray); // возвращ первую букву каждого элемента (S D N N)

//*** метод split и join








// ** Перебор элементов массива
// * Цикл for

