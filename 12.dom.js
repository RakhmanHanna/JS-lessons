//* DOM - объектная модель документа (Document Object Model)
// представляет документ как иерархическая дерево элементов, позволяя добавлять/удалять/изменять отдельные части страниц

<html>
  <head>
    <title>Simple page</title>
  </head>
  <body>
    <p>Hello</p>
  </body>
</html>;
//обращение к элементам DOM предст в оы с пом глоб объекта document

const originalTitle = document.title; //возвр Simple page

//задание заголовка документа
document.title = 'New page title'; //новый заголовок страницы

//  получение полного url адреса
const url = document.url;

//* получение элемента
//**  метод getElementById
// принимает идентификатор элемента, кот нужно получить, и возвращ этот элемент или null если его не сущ

<div id="myDiv">text</div>;
// этот элемент можно получить след образом
const div = document.getElementById('myDiv'); //получение ссылки на div
//* метод querySelector
// принимает css запрос и возвр первый соотв ему элемент, либо знач null если такой не найден
document.querySelector('div');
document.querySelector('.block');

//* метод querySelectorAll
//принмает css запрос и возвращ массив со всеми свойствами
document.querySelectorAll('.block');

//* метод getElementsByClassName
// принимает строку с одним или неск именами классов и возвращ массив
document.getElementsByClassName('class');

//1
1;
document.querySelector('#my-first-elem');
document.getElementById('my-first-elem');
2;
document.querySelectorAll('.container');
document.getElementsByClassName('container');
3;
document.querySelector('.wrapper');
document.querySelectorAll('.wrapper')[0];
(4)[0][1];

//* свойство classList
// это свойство сущ спец для добавления/удалени/замены имен классов
// у него есть доп методы
// add - добавляет класс
// contains - указывает, есть ли указ класс в элементе
// remove - удаляет класс
// toggle - удаляет класс, если он уже есть и добавлет, если отсутствует
const block = document.querySelector('.root');
block.classList.add('new-class');

//* Стили и их изменение при помощи js
// у любого html элемента есть свойство style, доступное при пом js
// каждое css свойство можно определить при пом
// свойства, кот в css пишутся через дефис - в js использ CamelCase
// background-color ==> backgroundColor

const block = document.querySelector('.root');
block.style.color = 'red';

//* создание элемента
// элементы можно создавать с пом метода document.createElement()
const div = document.createElement('div');
// * добавление элементов
// ** методы добавления

// block.append() -  добавляет узлы (элементы) или строки в конец block
// block.prepend() - вставляет узлы (элементы) или строки в начало блока
// block.before - встваляет узлы или строки до block
// block.after - вставляет узлы или строки после block
// block.replaceWith() - заменяет block заданными узлами и строками

// * свойство innerHTML
// устанавливает или получает разметку дочерних элементов

block.innerHTML = '<p>test!</p>';

//* удаление узлов
block.remove();

//1
const p = document.createElement('p').classList.add('Text');
p.innerText = 'Это всего лишь текст';
const div = (document.createElement('div').classList('alert').innerText =
  'A это сообщ..');
div.style.backgroundColor = 'red';
div.style.color = 'white';
div.style.padding = '20px';
p.after(div);

//2
const ol = document.createElement('ol');
const arr = [].forEach((item, index) => {
  const li = document
    .createElement('li')
    .classList.add(index % 2 ? 'odd' : 'even');
  li.innerText = item;
  if (li.contains('odd')) li.style.backgroundColor = 'blue';
  if (li.contains('even')) li.style.backgroundColor = 'green';
  if ([...new Set(item.split(''))].join('').length !== item.length)
    li.style.Color = 'white';
  return li;
});

//3
function shoqMessage(text, color, top, left) {
  const div = document.createElement('div').classList.add('message');
  div.innerText = text;
  div.style.color = color;
  div.style.position = 'Fixed';
  div.style.top = top;
  div.style.left = left;
}
