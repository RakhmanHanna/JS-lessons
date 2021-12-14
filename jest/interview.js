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


// Что выведет этот код?
//
for(let i=0; i<10; i++) {
  setTimeout(function() {
    alert(i);
  }, 100);
} // Числа от 0 до 9

//
for(var i=0; i<10; i++) {
  setTimeout(function() {
    alert(i);
  }, 100);
} // 10 раз число 10

//
"use strict";
a = null + undefined;
alert(a); // ошибка

//
let f = function g() { return 23; };
alert( typeof g() ); // ошибка

//
let a = [1,2]
(function() { alert(a) })() // ошибка

//
let obj = {
  "0": 1,
  0: 2
 };
 alert( obj["0"] + obj[0] ); // 4

 //
 function f() {
  let a = 5;
  return new Function('b', 'return a + b');
}
alert( f()(1) ); // ошибка

//
if (function f(){}) {
  alert(typeof f);
} // undefined

//
let a = new Array(1,2), b = new Array(3);
alert(a[0] + b[0]); // NaN

//
for(let key in  {1:1, 0:0}) {
  alert(key);
 } // 0, затем 1

 //
 Чему равно a + b + c? // 111
let a = 1;
let b = { toString() {return '1'} };
let c = 1;

//
let obj = {'1': 0, 1: 1, 0: 2};
alert(obj['1']); // 1

//
let a = (1,5 - 1) * 2;
alert(a); // 8

//
4 - "5" + 0xf - "1e1" // Цифре

//
null + {0:1}[0] + [,[1],][1][0] //2

//
let f = function(x) {
  alert(x)
}
(function() {
  f(1)
}()) // ошибка

//
let user = {
  sayHi: function() {
    alert(this);
  }
};
(user.sayBye = user.sayHi)(); // ошибка

//
Какие варианты правильно объявляют функцию f, возвращающую сумму двух аргументов ?
let f = function(a,b) { return a+b }
let f = new Function("a,b", "return a+b")
let f = new Function("a", "b", "return a+b")
let f = (a, b) => a + b


//
Существует ли такое значение X, что после присваивания a = X вызов alert(a == X) выдаст false?
let a = X;
alert( a == X ); // false
Да, другое.

//
var a = {};
(function b(a) {
  a.a =10;
  a = null;
}) (a);
console.log(a);

//
function foo() {
  foo.x = 10;

}
console.log(foo.x);

//
Promise.reject('a')
  .catch(p=>p+'b')
  .catch(p=>p+'c')
  .catch(p=>p+'d')
  .finally(p=>p+'e')
  .then(p=>console.log(p))

  //
  const a = {}
  function clear(obj) {
    obj.x = 40
    obj = null
  }
  clear(a);

  console.log(a); // { x: 40 }

  //
  const res = [5,7,9].slice(1)

  res.pop()
  res.push(4)
  console.log(res); // [7, 4]

  //
  var obj = {
    a: () => {
      console.log(this.prop);
    },
    prop: 1
  };
  obj.a();
  var fn = obj.a.bind(obj);
  fn(); // undefined undefined