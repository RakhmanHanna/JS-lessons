// function sayHi(firstName, lastName) {
//     function getFullName() {
//         return firstName + " " + lastName;
//     }
//     alert('Hello, ' + getFullName());
// }
let firstName = 'Anna';
let lastName = 'Rakhman';
function sayHiBye(firstName, lastName) {
  // функция-помощник, которую мы используем ниже
  function getFullName() {
    return firstName + ' ' + lastName;
  }

  alert('Hello, ' + getFullName());
  alert('Bye, ' + getFullName());
}
sayHiBye();
