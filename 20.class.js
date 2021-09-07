//  в ООП класс - это расширяемый шаблон кода для создания объектов
//который устанавливает в них начальные значения (свойства) и реализацию поведения (методы)
// синтаксис классво не вводит новую объектоно-ориентирован модель
// а предоставл более простой и понятный способ создания объектов и организации наследования

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayName = function () {
  alert(this.name);
};
Person.prototype.getOlder = function (years) {
  this.age += years;
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    alert(this.name);
  }
  getOlder() {
    this.age += years;
  }
}

//1
// Переписать функцию-конструктор в виде класса

function Car(name, year, color) {
  this.name = name;
  this.year = year;
  this.color = color;
  this.changeColor = function (newColor) {
    this.color = newColor;
  };
}
let car = new Car('BMW', 2012, 'red');
car.changeColor('black');

class Car {
  constructor(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
  }
  changeColor(newColor) {
    this.color = newColor;
  }
}
let car = new Car('BMW', 2012, 'red');
car.changeColor('black');

// Определения класса нач с ключевого слова class за кот след имя типа
// свойства и методы класс определяются в фигурных скобках
// чтобы определить метод достаточно указать его имя и скобки, а ключ слово function
// если метод наз constructor он работает как конструктор класса

// все остальн методы и свойства примен к прототипу

// метод  constructor - спец метод необх для создания и инициализации объектов созданных с пом класса
// в классе может быть только один метод с именем constructor

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
let user = new Person('Alex');
user.sayHi();
//когда вызывается new Person, создается нов объект
// конструктор запскается с заданным аргументом и сохраняет его в this.name

//2
// Ваша задача реализовать класс Person
// заполнить метод конструкт ор, чтобы принят имя как строку и возраст как число
// реализовать метод getInfo получения информации, кот д вернуть Jon's age 34

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `${this.name}s age ${this.age}`;
  }
}
let person = new Person('John', 34);
person.getInfo();

//* Наследование
// главное преимущество классов над более традиционным js синтаксисом - простота реализации наследования
// можно использ простой синтаксис, обзий для многих языков: ключ слово extends
class Employee extends Person {}

// если мы определим свой метод с таким же именем в дочернем классе, то он будет использ взамен родительского
// обычно мы не заменяем родит метод, а скорее делаем нов на его основе, изменяя или расширяя его функциональность
// мы делаем что-то в нашем методе и вызываем родит метод до или после или в процессе с пом ключ слова super

// super.method(...) вызывает родит метод
// super(...) вызывает родит конструктор (работает только внутри нашего конструктора)

// наследование конструкторов:

// constructor(name, age) {
//     super(name);
//     this.age = age;
// }

// 3
// Ваша задача реализовать класс Cat, который расширяет Animal
// и заменить метод speak, чтобы заменить имя кошки + мяу
// например Mr Whiskers'

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    alert(this.name + 'says Hi');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    alert(this.name + 'мяу');
  }
}
let cat = new Cat('Mr Whiskers');
cat.speak();

//
class Person {
  constructor(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
  }
  fullName() {
    console.log(`${this.firstName} ${this.secondName}`);
    return `${this.firstName} ${this.secondName}`;
  }
}
let person = new Person('Alex', 'Petrov');
person.fullName(); // Alex Petrov

class Employee extends Person {
  constructor(firstName, secondName, vacancy) {
    super(firstName, secondName);
    this.vacancy = vacancy;
  }
  fullName() {
    console.log(`${this.firstName} ${this.secondName} ${this.vacancy}`);
  }
  getInfo() {
    console.log(`${super.fullName} ${this.vacancy}`);
  }
}
let Employee = new Employee('Alex', 'Petrov', 'developer');
employee.fullName(); // Alex Petrov developer

//4
//Создать класс Person со станд свойствами(имя, возраст) и действиями(идти разговаривать есть)
//от него наследовать классы ребенок и взрослый со своими особен методами и свойствами (плакать или ходить в школу)
//взрослым придуимать ключ или метод
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  go() {}
  speak() {}
  eat() {}
}
class Child extends Person {
  constructor(name, age) {
    super(name, age);
  }
  cry() {}
}
let Child = new Child('Alex', 2);
Child.cry();

class Adult extends Person {
  constructor(name, age, phone) {
    super(name, age);
    this.phone = phone;
  }
}
let Adult = new Adult('Max', 30, apple);
Adult.go();
Adult.speak();
Adult.eat();
