// объявление массива
let newArray = new Array();
let newArray = [];

// синтаксис
// заполняется массив значениями(элементами) через ,

let simpleArray = [1, 2, 3];
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
  },
];

// * получение значения

let newArray = [
  'Solo', // 0я позиция
  'Dread', // 1я позиция
  'Nexus', // 2я позиция
  'Ns', // 3я позиция
];
console.log(newArray[0]); // Solo
console.log(newArray[3]); // Ns
console.log(newArray[15]); // underfined

// * длина массива
// длина массива = количеству элементов

let newArray = ['Solo', 'Dread', 'Nexus', 'Ns'];
console.log(newArray.length); // 4 (так как 4 элемента)

// доступ к массиву
// spread -  оператор для копирования значения другого массива
const firstArray = [1, 2, 3, 4];
// при присваивании массиву другой массив, копируется ссылка на него, а не его значение
const secondArray = firstArray; // присваивает ссылку на значение исходного массива
// при изменении secondArray будет изменяться и firstArray
// для того чтобы скопировать значение исх массива, а не его ссылку, использ spread оператор котор указали выше
const thirdArray = [...firstArray]; // spread-оператор, копирует значение исх массива firstArray

// редактирование массива
// изменение значения
let newArray = [
  'Solo', // 0я позиция
  'Dread', // 1я позиция
  'Nexus', // 2я позиция
  'Ns', // 3я позиция
];
newArray[3] = 'Flash';
console.log(newArray); // возвр [solo, dread, nexus, flash]

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
console.log(party); // возвр [ns, flesh, solo, dread, nexus]

// Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращ его номер, если найдено, или -1, если не найдено
// find([1,2,3,4,5], 4);

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= Array.lenght; i++);
{
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
party.splice(1, 1); //начиная с первой позиции удаляет один элемент
console.log(party); // 'Solo', 'Nexus'

//также можно использ отриц знач метода splice

let party = ['Solo', 'Dread', 'Nexus'];
party.splice(-1, 1); // начиная с первой позиции с конца удаляет один элемент
console.log(party); // Solo, Dread

// *** удаление элементов с сохранением их в переменную
let party = ['Solo', 'Dread', 'Nexus'];
let newParty = party.splice(1, 1); // начиная с первой позиции удаляет один элемент
console.log(newParty); //'Dread'

// *** Замена элемента массива другим элементом
let party = ['Solo', 'Dread', 'Nexus'];
// party.splice(индекс, кол заменяемых элементов, нов элемент)
party.splice(1, 1, 'NS');
console.log(party); // Solo, NS, Nexus

// *** Добавление элементов
let party = ['Solo', 'Dread', 'Nexus'];
// party.splice(индекс, 0 - означает добавление, новые элементы)
party.splice(1, 0, 'NS', 'Flash'); //начиная с первой позиции добавляет один элемент
console.log(party); // Solo, NS, Flash, Dread, Nexus

// *** Метод slice
// создает нов массив, в который дублирует часть изнач массива либо весь массив
// * Копирование части массива
let party = ['Solo', 'Dread', 'Nexus'];
// psrty.slice(индекс нач позиции, индекс конечн позиции не включая)
let newParty = party.slice(1, 2); // копир начиная с первой позиции до второй позиции не включая
console.log(newParty); // Dread
// можно использ отриц знач, отсчет будет идти справа налево

let party = ['Solo', 'Dread', 'NS', 'Nexus'];
let newParty = party.slice(1, -1); // копир начиная с первой позиции до последней не включая
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
let newParty = party(...party, 'Flash');
console.log(newParty); // 'Solo', 'Dread', 'Nexus', 'Flash'

// ** метод sort
// сортирует массив, меняя в нем порядок элементов (по алфавиту)
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
console.log(party.sort()); //  'Dread','Nexus' 'NS', 'Solo',

// для сортировки можно использ стрелочную функцию
let numberArray = [1, 4, 2, 5, 3];
console.log(numberArray.sort((a, b) => a - b));

// ** метод reverse
// меняет порядок в массиве на обратно
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
console.log(party.reverse()); // Nexus NS Dread Solo

// *** Метод map
// вызывает функцию для каждого элемента массива и возвращает НОВЫЙ МАССИВ (и ничего больше) с рез-ом выполнения функции
let party = ['Solo', 'Dread', 'NS', 'Nexus'];
//party.map(элемент массива, индекс, сам массив) => {})
let newArray = party.map((item) => item[0]); // возвращ первую (0 индекс) букву каждого элемента массива
console.log(newArray); // возвращ первую букву каждого элемента (S D N N)

//*** метод split и join

//** split("") - преобразует строку в массив по заданному разделителю
let stringParty = 'Solo, Dread,Nexus'; // строка из слов, разделенных друг от друга запятой
let arrayParty = stringParty.split(','); // запятая явл разделителем
console.log(arrayParty); // возвращ массив ["Solo", "Dread", "Nexus"]

// можно ограничить количество элементов, котор попадут в массив

let stringParty = 'Solo, Dread,Nexus';
let arrayParty = stringParty.split(',', 2); // 2 элемента попадут в новый массив
console.log(arrayParty); // возвращ массив "Solo", "Dread"

//** join("") - преобразует массив в строку с заданным разделителем
let arrayParty = ['Solo', 'Dread', 'Nexus'];
let stringParty = arrayParty.join(';'); // точка с запятой явл разделителем
console.log(stringParty); // возвращает строку "Solo;Dread;Nexus"

//* Проверка
// Массив не явл отдельным типом данных, значит typeof выдаст тип object
// проверить, что массив явл массивом можно с помощью Array.isArray();

let party = ['Solo', 'Dread', 'Nexus'];
if (Array.isArray(party)) {
  console.log('Это массив');
} else {
  console.log('404');
}

// ** Перебор элементов массива
// * Цикл for

let party = ['Solo', 'Dread', 'Nexus'];
for (let i = 0; i < party.length; i++) {
  //  возвращ значение кажд элемента массива, пока i меньше длины массива
  console.log(party[i]); // поочередно возвращ Solo Dread Nexus
}

// * Цикл for of
// используется для вывода значений массива

let party = ['Solo', 'Dread', 'Nexus'];
for (let partyItem of party) {
  // возвращ значение кажд элемента массива
  console.log(partyItem); // поочередно возвращ Solo Dread Nexus
}

// ** Метод forEach
// выполняет функцию для каждого элемента массива
let party = ['Solo', 'Dread', 'Nexus'];
// party.forEach((элемент массива, индекс, сам массив) => {})
party.forEach((item, index, array) => {
  console.log(`${item} имеет ${index} в ${array}`);
});

// * Метод filter
// позвол фильтр по заданному условию исходный массив
// to do: отфильтровать массив и оставить только объекты, где возраст равен 22

let party = [
  { name: 'Dread', age: 18 },
  { name: 'Solo', age: 25 },
  { name: 'NS', age: 22 },
  { name: 'Nexus', age: 17 },
  { name: 'Flash', age: 22 },
  { name: 'Dendy', age: 23 },
];

// party.filter(function(элемент массива, индекс, сам массив) {})

const filteredParty = party.filter(function (person, index, array) {
  if (person.age === 22) {
    return true;
  }
});

const filteredParty = party.filter(function (person, index, array) {
  return person.age === 22;
});

const filteredParty = party.filter((person) => person.age === 22);

// * Метод reduce
// позвол вычислить единое знач на основе всего массива

// to do: вычислить суммарный age всех персонажей
let party = [
  { name: 'Dread', age: 18 },
  { name: 'Solo', age: 25 },
  { name: 'NS', age: 22 },
  { name: 'Nexus', age: 17 },
  { name: 'Flash', age: 22 },
  { name: 'Dendy', age: 23 },
];
// party.reduce((начальное значение, элемент массива, индекс, сам массив) => {}, начальное значение);

const totalAge = party.reduce((total, person, index, array) => {
  return (total += person.age); // 127
}, 0);

// запись можно упростить с использованием стрелочн функции
const totalAge = party.reduce((total, person) => (total += person.age), 0);

// * метод find
// обеспечивает поиск в массиве с определен условием
// возвращ первый попавшийся элемент, удовлетв условию
// to do: найти первого персонажа с возрастом 17

// party.find((элемент массива, индекс, сам массив) => {})

const youngPerson = party.find((person) => person.age === 17);
console.log(youngPerson); // возвращ объект {name: 'Nexus', age: 17}

// * findIndex
// обеспечивает поиск в массиве с определ условием
// возвращ индекс первого попавшегося элемента, удовлетв условию
// party.findIndex((элемент массива, индекс, сам массив) => {})

const youngPerson = party.findIndex((person) => person.age === 17); // возвращ индекс первого попавшегося персонажа с возрастом 17
console.log(youngPerson); // возвращ индекс 3
