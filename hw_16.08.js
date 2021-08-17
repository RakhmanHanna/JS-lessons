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
