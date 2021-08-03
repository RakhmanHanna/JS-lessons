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
// второй элемент стан первым
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