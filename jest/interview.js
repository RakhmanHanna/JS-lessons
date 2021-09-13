// из собеса

//1
(5).plus(4).minus(3);
// либо
sum(2, 3).plus(4).minus(3);
// решение
function summ(val) {
  var self = Object.create(summ.prototype);
  self.val = val;
  return self;
}
summ.prototype = {
  plus(val) {
    this.val += val;
    return this;
  },
  minus(val) {
    this.val -= val;
    return this;
  },
  valueOf() {
    return this.val;
  },
};

+summ(0).plus(1); // 1
+summ(1).plus(1).plus(1); // 3
+summ(1).plus(2).plus(3).plus(4).minus(5); // 5
summ(3).plus(7).minus(2) * 3; // 24
99 + summ(1); // 100

//
ck;

//2
// Напишите наследование двух классов Person и Employee
// Person содержит свойства firstName и lastName
// Employee содержит свойство vacancy и функцию, которая выводит в консоль имя, фамилию и должность работника

//3
//
