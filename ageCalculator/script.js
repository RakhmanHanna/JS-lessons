const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
  let inputDate = new Date(document.getElementById('date-input').value);
  let birthMonth, birthDate, birthYear;
  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };
  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();
  if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year === currentYear) ||
    (birthDetails.date > currentDate &&
      birthDetails.month === currentMonth &&
      birthDetails.year === currentYear)
  ) {
    alert('Not born yet');
    displayResults('-', '-', '-');
    return;
  }
  birthYear = currentYear - birthDetails.year;
  if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = currentMonth - birthDetails.month + 12;
  }

  if (currentDate >= birthDetails.date) {
    birthDate = currentDate - birthDetails.date;
  } else {
    birthMonth--;
    let days = months[currentMonth - 2];
    birthDate = currentDate - birthDetails.date + days;
    if (birthMonth < 0) {
      birthMonth = 11;
      birthMonth--;
    }
  }
  displayResults(birthDate, birthMonth, birthYear);
}

function displayResults(date, month, year) {
  document.getElementById('years').textContent = year;
  document.getElementById('months').textContent = month;
  document.getElementById('days').textContent = date;
}
