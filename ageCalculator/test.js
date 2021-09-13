const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //массив чисел, описыв кол-во дней в мес, кол-во чисел опис кол-во месяцев в году

function ageCalculate() {
  // функция счит кол-во дней, мес и лет с даты рождения
  let inputDate = new Date(document.getElementById('date-input').value); //созд поле ввода, обращ к глоб оьъекту и забираем данные из ОС, где value - атрибут
  let birthMonth, birthDate, birthYear; // объявляем переменные месяц рождения, день рождения, год рожд
  let birthDetails = {
    // объявл переменную с ключ-значениями
    date: inputDate.getDate(), // получаем знач дата рожд (день)
    month: inputDate.getMonth() + 1, // получаем знач дата рожд (месяц)
    year: inputDate.getFullYear(), // получаем знач дата рожд (год)
  };
  let today = new Date(); // обращ к глоб объекту для получения данных тек даты
  let currentYear = today.getFullYear(); // обращ к глоб объекту для получения данных тек года
  let currentMonth = today.getMonth() + 1; // обращ к глоб объекту для получения данных тек мес
  let currentDate = today.getDate(); // обращ к глоб объекту для получения данных тек даты
  if (
    birthDetails.year > currentYear || // сверка года указ и тек
    (birthDetails.month > currentMonth && birthDetails.year === currentYear) || // сверка мес: указ и тек, при условии: если указ год = тек
    (birthDetails.date > currentDate &&
      birthDetails.month === currentMonth &&
      birthDetails.year === currentYear) // указ дата и тек, при условиях: если указ мес = тек и указ год = тек
  ) {
    alert('Not born yet'); // иначе выводим предупреждение 'Not born yet'
    displayResults('-', '-', '-'); //  выводим в результате '-', '-', '-'
    return; // возврат для введения нов данных
  }
  birthYear = currentYear - birthDetails.year; //вычисление кол-ва лет м/д тек годом и годом рождения (в случ если тек знач меньше указ - получаем отриц знач, оно для нас не приемлемо в тек задаче, именно поэт мы примен доп условия для корректности вывода данных)
  if (currentMonth >= birthDetails.month) {
    // если тек мес >= указ мес рожд (в случ если тек знач меньше указ - получаем отриц знач, оно для нас не приемлемо в тек задаче, именно поэт мы примен доп условия для корректности вывода данных)
    birthMonth = currentMonth - birthDetails.month; //  мес рожд это тек мес минус указ мес (в случ если тек знач меньше указ - получаем отриц знач, оно для нас не приемлемо в тек задаче, именно поэт мы примен доп условия для корректности вывода данных)
  } else {
    birthYear--; // -1 год, если тек мес меньше указ мес рожд
    birthMonth = currentMonth - birthDetails.month + 12;
  } //(в случ если тек знач меньше указ - получаем отриц знач, оно для нас не приемлемо в тек задаче, именно поэт мы примен доп условия для корректности вывода данных)

  if (currentDate >= birthDetails.date) {
    // если тек дата рожд >=  указ дата рожд
    birthDate = currentDate - birthDetails.date; // дата рожд это тек дата минус указанная (в случ если тек знач меньше указ - получаем отриц знач, оно для нас не приемлемо в тек задаче, именно поэт мы примен доп условия для корректности вывода данных)
  } else {
    birthMonth--; // -1 мес, если тек дата меньше даты рожд
    let days = months[currentMonth - 2]; // получаем тек значение
    birthDate = currentDate - birthDetails.date + days; // тек дата минус дата рожд плюс тек знач
    if (birthMonth < 0) {
      // проверка: если ввели отриц знач
      birthMonth = 11; // мес рожд = 11
      birthMonth--; // минус 1 мес
    }
  }
  displayResults(birthDate, birthMonth, birthYear); // выводим рез-т данных
}

function displayResults(date, month, year) {
  // порядок вывода
  document.getElementById('years').textContent = year; // кол-во полных лет с даты рожд
  document.getElementById('months').textContent = month; // кол-во полн мес в неполном тек году прошло с мес рождения
  document.getElementById('days').textContent = date; // кол-во дней в неполн мес прошло с момента рожд
}
