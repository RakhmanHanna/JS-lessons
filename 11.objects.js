// * Объявление объекта
let newObject = new Object(); //синтаксис-конструктор объекта
let newObject = {}; //синтаксис-литерал объекта

// * Синтаксис
// Обьект сод более сложн структуру данных
// Объект может б создан с пом {} и сод набор необязат свойств
// Свойство сост из пары - ключ: значения. Запятыми отделяются свойства между собой.
let person = {
  name: 'Ivan',
  age: 18, // свойство объекта, где age - ключ, 18 - значение
  loveMusic: true,
  //'love music': true,  //ключ, состоящий из нескольких слов, заключ в кавычки
};
console.log(person); // возвращ объект
console.log(typeof person); // возвращ тип данных object

// * Обращения к свойствам объекта

let person = {
  name: 'Ivan',
  age: 18, // свойство объекта, где age - ключ, 18 - значение
  'love music': true, //ключ, состоящий из нескольких слов, заключ в кавычки
};
console.log(person.name); //Обращение к свойству с ключом из одного слова . Возвращ Ivan
console.log(person['love music']); //Обращение к свойству с ключом из нескольких слов. Возвращ true

// * Вложенность
let person = {
  name: 'Ivan',
  age: 18, // свойство объекта, где age - ключ, 18 - значение
  'love music': true, //ключ, состоящий из нескольких слов, заключ в кавычки
  address: {
    city: 'Minsk',
    country: 'Belarus',
  },
};
console.log(person.address.city); // доступ к свойству объекта внутри др объекта. Возвращ 'Minsk'

// * Изменение объекта
// **  Добавление свойства
let person = {
  name: 'Ivan',
};
// Чтобы добавить свойство в объект необх обратиться к объекту и через точку добавить нов свойство
person.age = 22;
console.log(person); //возвращ объект { name: 'Ivan', age: 22 }
// таким же способом можно добавить объект внутрь объекта
person.address = {
  city: 'Minsk',
  country: 'Belarus',
};
console.log(person); // возвращ объект { со всеми свойствами }

// * Удаление свойства
let person = {
  name: 'Ivan',
  age: 18, // свойство объекта, где age - ключ, 18 - значение
  'love music': true, //ключ, состоящий из нескольких слов, заключ в кавычки
};
// Для удаления свойства из объекта используется delete
delete person['love music']; // удаляет из объекта свойство  'love music': true
delete person.name; // удаляет из объекта свойство name: 'Ivan'
console.log(person); // возвращ объект { age: 18}

// * Изменение значения свойства
let person = {
  name: 'Ivan',
  age: 18,
};
// Чтобы изменить знач уже существующего свойства необх обратиться к нему по ключу
person.age = 22;
console.log(person); // возвращ { name: 'Ivan', age: 22 }

// * Копирование объекта
// Копирование ссылки на объект
// При копировании объекта в др переменную, сам обект не дублируется, а копируется только ссылка на него
// Это означ что при изменении скопированного объекта, изменится объект их первоначальной переменной
let person = {
  name: 'Ivan',
  age: 18,
};

let newObject = person; //копирование ссылки объекта person в переменную newObject
newObject.age = 22; // изменение значения свойства age на 22
console.log(person); // возвращ объект { name: 'Ivan', age: 22 }
console.log(newObject); // возвращ объект { name: 'Ivan', age: 22 }

//{ a: 1} === { a: 1}; // false
let object = { a: 1 };
let object2 = object; // true

// * Дублирование объекта
// Полное дублирование объекта, а не копирование ссылки на первоначальный объект
// Для дублир объекта использ object.assign
let person = {
  name: 'Ivan',
  age: 18,
};
// Object.assign(куда(объект), что(свойство 1), что(свойство 2))
let newObject = Object.assign({}, person); //Дублируется объект person в переменную newObject со всеми свойствами
newObject.age = 22;
console.log(person); // 18
console.log(newObject); // 22

// Аналогичного результата можно добиться с пом spread-оператора
let person = {
  name: 'Ivan',
  age: 18,
};
let newObject = { ...person };
newObject.age = 22;
console.log(person); // 18
console.log(newObject); // 22

// * Проверка свойства на наличие
let person = {
  name: 'Ivan',
  age: 18,
};
if (person.address) {
  // если свойство address в объекте сущ, то возвращ true
  console.log(person.address); // тогда возвращ его знач
}
// если в объекте есть еще один объект, то при обращении к несуществующему свойству внутреннего объекта появится ошибка
// синтаксис 'Опциональная цепочка' позвол с пом оператора ?. избежать ошибки
console.log(person?.address?.city); //  вместо ошибки результатом будет undefined

// * Цикл for in
// использ для перебора всех свойств объекта
let person = {
  name: 'Ivan',
  age: 18,
};
// for(let key in object)
for (let key in person) {
  console.log(key); // возвращ ключ каждого свойства в объекте
  console.log(person[key]); // возвращ значение каждого из свойств с соответствующим ключом
}

// * Методы объекта
let person = {
  name: 'Ivan',
  age: 18,
};

const keys = Object.keys(person); // присваивает массив из всех ключей объекта
console.log(keys); //возвращ [ name, age]

const values = Object.values(person); // присваивает массив из всех значений объекта
console.log(values); // возвращ  [ 'Ivan', 18 ]

let person = {
  name: 'Ivan',
  age: 18,
  sayIntro: function () {
    alert(`${this.name}, ${this.age}`);
  },
};
person.sayIntro();

// 1
let car = {
  brand: 'Mazda',
  color: 'red',
};
for (let key in car) {
  console.log(key);
  console.log(car[key]);
}

//2
let user = {
  name: 'Ivan',
  email: 'em',
  phone: 850,
};
user.name;
user.email;
user.phone;

const { name, email, phone } = user;
name;
email;
phone;

// 3
let circle = {
  radius: 50,
  color: 'red',
  calculate: function () {
    console.log(2 * Math.Pi * this.radius);
  },
};
circle.calculate();

// 4
let message = {
  text: 'Hey',
  getMessage: function (string) {
    this.text = string;
  },
  showmessage: function () {
    alert(this.text);
  },
};
message.getMessage('Ivan');

// 5
let rect = {
  width: 10,
  height: 20,
  getArea: function () {
    return this.height * this.width;
  },
};

// 6
let obj = {
  isEmpty: function () {},
};
object.keys(obj).length ? true : false;

!Bollean(object.keys(obj).length); // можем сразу вывести в консоль

// 7*
let selfGeneratedUser = {
  getInfo: function () {
    this.name = prompt('name');
    this.email = prompt('email');
    this.phone = +prompt('phone');
  },
  introduce: function () {
    if (this.name) {
      alert(this.name);
    }
    if (this.email) {
      alert(this.email);
    }
    if (this.phone) {
      alert(this.phone);
    }
  },
};
selfGeneratedUser.getInfo();
selfGeneratedUser.introduce();
