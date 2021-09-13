//* прототипы
// каждая функция создается со свойством prototype
// prototype - это объект, содержащий свойства и методы, кот дб доступны в экземплярах конкр ссылочного типа
// этот объект в буквальном смысле явл прототипом для объекта, создаваемого при вызове конструктора

// преимущество использования прототипа в том, что его свойства и методы общие для объекта
// вместо того, чтобы назначать атрибуты объекту, в конструкторе их можно назначить прототипу

// когда мы хотим прочитать свойства из object, а оно отсутствует, js автоматически берет его из прототипа
// в программировании такой механизм наз прототипным наследованием

// свойство [[prototype]] явл внутренним и скрытым
// но есть много способов задать его

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;
rabbit.eats;

let animal = {
  eats: true,
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
// Установка Rabbit.prototype = animal; буквально говорит интерпретатору след -
// при создании объекта через new Rabbit() запиши ему animal в [[prototype]]
let rabbit = new Rabbit('white rabbit'); // rabbit.__proto__ = animal
console.log(rabbit.eats); // true

// с пом прототипов встроенных объектов можно получать ссылки на методы по умолчанию
// кроме того эти прототипы можно изменять, что позвол добавлять методы встроенным объектам

// obj = new Object(), где Object - встроенная функция конструктор для объектов с собствен свойством prototype
// которое ссылается на огромный объект с методом toString и др
// др встроенные объекты (Array, Date, Function и др) также хранят свои методы в прогтотипах

function Animal() {
  this.run = function () {
    alert('run');
  };
}

function Rabbit() {
  this.jump = function () {
    alert('jump');
  };
}
Rabbit.prototype = new Animal();
let rabbit = new Rabbit();
rabbit.run(); // run

//* Методы прототипов
Object.getPrototypeOf(obj); // возвращ свойство [[prototype]] объекта obj
Object.setPrototypeOf(obj); // устан свойство [[prototype]] объекта obj

// 1
// Создать функцию Dog кот наследует метод eat из объекта Animal
function Dog() {}
function Animal() {
  this.eat = function () {
    alert('eat');
  };
}
Dog.prototype = new Animal();
let dog = new Dog();
dog.eat();





//2 hw (14 презентация)
class Figure {
    constructor(color, width, height) {
        this.color = color,
        this.width = width,
        this.height = height,
    }
    getSquare() {
        return this.width * this.height
    }
}

class Rectangle  extends Fig {
    constructor(color, width, height) {
        super(color, width, height)
    }
}
let rect = new Rectangle();
rect.getSquareFigure();