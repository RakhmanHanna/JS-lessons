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

//5
let arr = [0,'2','4',1,5];
let newArr = [];
for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'string'){
        newArr.push(Number(arr[1]));
    }
}

//5
let arr = [0,'2','4',1,5];
let newArr = [];
for(item of arr) {
    
}