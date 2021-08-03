// циклы
// for
for (let i = 0; i < 3; i++) { // let i = 0 - объявление переменной; условие выаолнения цикла; действие после выполнения шага
    alert(i); // 0, затем 1, затем 2
}

// цикл do while
do {
    alert(i);
    i++;
} while (i < 3);   //условие выполнения цикла

for (let i = 0; i < 5; i++) {
    alert(`number ${i}`);
}

let i = 0;
while (i < 5) {
    alert(`number ${i}`);
    i++;
}

for (let i = 2; i <= 10; i+=2) {
    // if (i % 2 == 0) {
        alert(i);
    // }
}