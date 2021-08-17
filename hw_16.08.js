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
          fullName: firstName + lastName,
          gender,
          ...rest,
        });
      if (gender === 'Male')
        acc.men.push({
          fullName: firstName + lastName,
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
