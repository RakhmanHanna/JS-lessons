const count = prompt('Введите число');
if (count < 10 && count >= 25) {
  console.log(true);
}

const currentPassword = '777';
let password = prompt('Пароль');
if (currentPassword === password) {
  alert('Верно!');
} else if (password === null) {
  alert('Отмена');
} else {
  alert('Неверно');
}
