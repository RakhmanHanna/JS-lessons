//* callbacks
//функции наз асинхронными, пот действие будет завершено не сейчас, а потом
console.log(1);
settimeout(() => console.log(2), 1000);
console.log(3);

//аргументом в такие функции передается функция, кот выполняется по завершении действия
// это и есть функция обратного вызова
function load(scriptUrl, callback) {
    let script = document.createElement('script');
    script.src = scriptUrl;

    script.onload = () = callback(null, script);
    script.onerror = () = callback(new Error('Ошибка загрузки'));

}

//* Промисы
// Объект Promise используется для отложенных и асихронных вычислений

const newPromise = new Promise((resolve, reject) => {
    resolve('test');
});
newPromise.then(() => {
    console.log(value); // возвращ test
});

// функции мб зарегистрированы(подписаны) с пом методов .then, .catch, .finally

Promise.then(
    function(result) { успешное выполнение },
    function(error) { ошибка },
)

Promise
    .then(result =>{result})
    .catch(err => err)

// первый аргумент метода .then - функция, кот выполняется когда промис переходит в состояние 'выполнено успешно и переходит в результат'
// второй аргумент - функция, кот выполняется, когда промис переходит в сост 'выполнено с ошибкой' и получает ошибку
// аргументы resolve и reject - колбэки, который предоставляет сам js наш код только внутри исполнителя
// когда promise получает результат, сейчас или позже, он должен вызвать один из этих колбэков

//resolve(value) - если работа завершилась успешно с результатом value
//reject(error) - если произошла ошибка, error - объект ошибки
//Если бы мы хотели бы только обработатьт ошибку, то можно использ null в качестве первого аргумента
// или можно восплдьз методом .catch(errorFunc)

// .finally(() => alert('промис завершен'))
//функция в аргументе .finally выполнится в люб случае

//* PromiseAll
PromiseAll([
    new Promise(resolve => setTimeout(() => resolve(1), 3000));
    new Promise(resolve => setTimeout(() => resolve(1), 2000));
    new Promise(resolve => setTimeout(() => resolve(1), 1000));
    
        .then(alert());
]);

//* Async / await
// спец синтаксис для работы с промисами
async function newFunc () {
    return 1;
} //эта функция всегда возвращ промис

async function newFunc() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    });
    let result = await promise;  
    // будет ждать пока промис не выполнится 
    alert(result);
};
newFunc();

// * Сетевые запросы
// для сет запросов js можно исполь метод fetch

let response = fetch(url, [options]);

// url - адрес для правки запроса
//options - доп параметры: метод, заголовки и тд
// свойства response:
// status: код статуса HTTP-запроса, напр 200.
//ok: логическое значение: будет true если код HTTP-запроса 200-299


// * Методы для response
response.text(); //читает ответ и возвращ как обычный текст
response.json(); //декодирует ответ в формате json
response.formData(); //возвращ ответ как объект formData
response.body // можно считывать тело запроса по частям


fetch()


// установить хедеры запроса:
let response = fetch(url, {
    headers: {
        Authentication: 'secret',
    }
});
// для отправки POST запроса нам необх использ fetch- параметры
// method - HTTP метод, например POST
// body - тело запроса

let response = await fetch('fetch/post/user', {
    method: 'POST',
    body: JSON.stringify(user),
});

GET // получение данных
POST // запись данных - body - тело запроса
PUT // обновление 
DELETE // удаление



//задача 1
//Создайте асихронную функцию getTasks кот возвращ массив объектов категорий.
// Данные получать по ссылке https://test-todoist.herokuapp.com/api/tasks
//необх вывести имена и описание этих задач на странице в виде списка
const getTasks = async () => {
	const tasks = await fetch('https://test-todoist.herokuapp.com/api/tasks')
		.then(response => response.json())
		.then(tasks => tasks);
	const main = document.getElementById('main');
	const ul = document.createElement('ul');
	tasks.map(task => {
		const li = document.createElement('li');
		li.innerHTML = task.description;
		ul.append(li);
	});
	main.append(ul);
};
getTasks();


// Задача 2
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей github
// запрашивает у github информацию о них и возвращает массив объектов-пользователей
// информация о пользователе github с логином USERNAME доступна по ссылке https://api.github.com/users/USERNAME

async function getUsers(names) {
    let jobs = [];
    for(let name of names) {
        let job = fetch('https://api.github.com/users/'+name)
            .then(response => {
                if (response.status !== 200) {
                    return null;
                } else {
                    return response.json();
                }
            })
            .catch(error => console.log(error));
        jobs.push(job);
    };
    let results = await Promise.all(jobs);
    console.log(results);
};
getUsers(['serprok9694', 'chapski-dev', 'EvgeniSasim'])