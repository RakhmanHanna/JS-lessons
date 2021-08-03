'use strict';

// 3.
let age = prompt('Возраст');
if (age >= 14 && age <= 90);

//2.
let userName = prompt("Логин?", '');
if (userName == 'Админ') {
  let pass = prompt('Пароль?', '');
  if (pass == '123456') {
    alert( 'Добро пожаловать!' );
  } else if (pass == '' || pass == null) {
    alert( 'Вход отменен' );
  } else {
    alert( 'Пароль неверен' );
  }
} else if (userName == '' || userName == null) {
  alert( 'Вход отменен' );
} else {
  alert( "Пользователь не найден" );
}
