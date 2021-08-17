'use strict';

// 1
const users = [
  {
    id: 1,
    firstName: 'Jeanette',
    lastName: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ipAddress: '26.58.193.2',
  },
  {
    id: 2,
    firstName: 'Petr',
    lastName: 'Jackson',
    email: 'gfrediani1@senate.gov',
    gender: 'Male',
    ipAddress: '229.179.4.212',
  },
];

const fn = (arr) =>
  arr.reduce(
    (acc, person) => {
      const { gender, firstName, lastName, ...rest } = person;

      if (gender === 'Female')
        acc.women.push({
          fullName: firstName + ' ' + lastName,
          gender,
          ...rest,
        });
      if (gender === 'Male')
        acc.men.push({
          fullName: firstName + ' ' + lastName,
          gender,
          ...rest,
        });
      return acc;
    },
    {
      women: [],
      men: [],
    }
  );

// 2
// todo: Функция принимает массив объектов.
// todo: Возвращает массив пользователей, отсортированных по полю username в алфавитном порядке и возраст которых начинается от 21 года.
// todo: Количество пользователей может быть не ограничено.

const initialData = [
  { username: 'Boris', age: 25 },
  { username: 'Alex', age: 21 },
  { username: 'Oleg', age: 14 },
  { username: 'Dmitriy', age: 35 },
  { username: 'Lida', age: 72 },
];

let sortArray = (array) => {
  let newArr = array.filter((item) => item.age >= 21);
  function sortObj(a, b) {
    if (a.username > b.username) {
      return 1;
    } else if (b.username > a.username) {
      return -1;
    } else {
      return 0;
    }
  }
  return newArr.sort(sortObj);
};
console.log(sortArray(initialData));

// * 8
// todo: Преобразуйте массив в объект используя функцию reduce.

const videos = [
  {
    id: 65432445,
    title: 'The Chamber',
  },
  {
    id: 675465,
    title: 'Fracture',
  },
  {
    id: 70111470,
    title: 'Die Hard',
  },
  {
    id: 654356453,
    title: 'Bad Boys',
  },
];

let transformArrayToObj = (array) => {
  let targetObj = array.reduce((object, item, index) => {
    object[index] = item;
    return object;
  }, {});
  return targetObj;
};

console.log(transformArrayToObj(videos));

// * 4
// todo: Функция принимает массив из числовых и строчных значений.
// todo: Результатом функции является новый массив объектов.
// todo: Каждый элемент нового массива должен сожержать поля значения, индекса, типа данных (number или string).
[12, 'test', 'user', 15, 0]
arr.map(item, index) => {
    return {
        value: item,
        index: index,
        type: typeof item,
    };
};
// или
arr.map((item, index)) => (
    {
        value: item,
        index,
        type: typeof item,
    }
)

//9
const boxarts = [
	{
		width: 200,
		height: 200,
		url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
	},
	{
		width: 150,
		height: 200,
		url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
	},
	{
		width: 300,
		height: 200,
		url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
	},
	{
		width: 425,
		height: 150,
		url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
	}
];
// let arr = [];
// let getBiggestSquare = (array) => {
//     letNewArr = array (item) => item.width * item.height
//     newArr.reduce(a, b) = {

//     }
// }