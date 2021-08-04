'use strict';

// * 1
// todo: Найти гипотенузу прямоугольного треугольника по теореме Пифагора.
const calculateHypotenuse = (leg1, leg2) => {
    return 3**2 + 4**2;
}
console.log(`Your answer is: ${calculateHypotenuse(3, 4)}`);

// * 2
// todo: Написать функцию, которая возвращает меньшее из чисел.

const findMin = (-50, 4);
    function min() {
        if (-50 < 4) {
            return -50;
        } else {
            return 4;
        }
    }
console.log(`Your number is: ${findMin(-50, 4)}`);

// * 3
// todo: Написать функцию, которая возвращает чётное ли число.

// const isEven = (number) => {
// 	… ваш код здесь
// };
// console.log(isEven(12));

// * 4
// todo: Написать функцию, которая удаляет первый и последний элемент строки.

const deleteChar = ('12345');
console.log(deleteChar.slice(1, -1));

// * 5
// todo: Написать функцию, которая делает первый символ строки заглавным, а остальные строчными.

const capitalize = ('asdfg');
console.log(capitalize('asdfg'[0].toUpperCase));


// * 6
// todo: Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'IE':
//     alert( 'О, да у вас IE!' );
//     break;
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Да, и эти браузеры мы поддерживаем' );
//     break;
//   default:
//     alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

if(browser == 'IE') {
    alert( 'О, да у вас IE!' );
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
        alert( 'Да, и эти браузеры мы поддерживаем' );
    } else {
        alert( 'Мы надеемся, что и в вашем браузере все ок!' );
    }
