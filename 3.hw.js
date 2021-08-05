//1
// for (var i = 1; i <= 3; i++) {
//     console.log('Номер ' + i + '!');
// }

let i = 1;
while (i <= 3) {
    alert('Номер ' + i + '!');
    i++;
}

//2
let styles = [«Джаз», «Блюз»];
styles.push(«Рок-н-Ролл»);
styles[1] = «Классика»;

console.log(styles.shift());
styles.unshift(«Рэп», «Регги»);

