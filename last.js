// При загрузке страницы 2 inputa. Login и Password.
// При правильном вводе отображаем на странице ВЫПОЛНЕН ВХОД
// login - проверяем на 'admin'
// password - 'b'

// let userName = prompt('Логин?', '');
// if (userName == 'admin') {
//   let pass = prompt('Пароль?', '');
//   if (pass == 'b') {
//     alert('Выполнен вход');
//   } else if (pass == '' || pass == null) {
//     alert('Вход отменен');
//   } else {
//     alert('Пароль неверен');
//   }
// }

// // При успешном входе записывать в localStorage параметр 'isAuth': 'true'.
// // При загрузке страницы проверять localStorage:
// // isAuth: true => "Вход выполнен"
// // isAuth: false => "Начальная страница с инпутами"
// // На странице 'Вход выполнен' добавить кнопку "Log out".

// window.addEventListener('load', () => {
//   const isAuth = localStorage.getItem('isAuth');
//   if (isAuth === true) {
//     renderDashboard();
//   }
// };

// const renderDashboard = () => {
//     const main = document.querySelector('#main');
//     const logout = () => {
//         localStorage.setItem('isAuth', false);
//     }
//     main.innerHTML =
//     <div>
//         <h2>Вход выполнен</h2>
//         <button id='logout' onclick='${logout()}'>Log out</button>
//     </div>;
//     document.querySelector()
// }

// const onSubmitClick = () => {
//     const login = document.querySelector('#login');
//     const password = document.querySelector('#password');
//     if (loginvalue === 'admin' && password.value === 'b') {
//         localStorage.setItem('isAuth', true);
//         renderDashboard();
//     } else {
//         alert('Данные неверные')
//     }
// };

//
const btn = document.getElementById('btn');

btn.onclick = function() {
    let userName = prompt('name', '');
    let userMail = prompt('mail', '');
    let userPhone = +prompt('phone', 0);

    const btn = document.getElementById('add');
    table.innerHTML +=

}


