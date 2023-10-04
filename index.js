// Задание 1
// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.

// Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }
// Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.

// Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:

// Название альбома - Исполнитель (Год выпуска)

// const musicCollection = [
//     {
//         title: "Осень",
//         artist: "DDT",
//         year: "1996"
//     },
//     {
//         title: "Весна",
//         artist: "Алиса",
//         year: "2012"
//     },
//     {
//         title: "Лето",
//         artist: "Кино",
//         year: "2003"
//     }
// ]

// musicCollection[Symbol.iterator] = function () {
//     return {
//         current: 0,
//         last: this.length,
//         next() {
//             return this.current <= this.last ? { done: false, value: musicCollection[this.current++] } : { done: true };
//         }
//     }
// }

// for (let album of musicCollection) {
//     console.log(`${album.title} - ${album.artist} (${album.year})`);
// }

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// Отслеживать, какой повар готовит какое блюдо.
// Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.






const specialisation = new Map();
specialisation.set("Виктор", "Пицца");
specialisation.set("Ольга", "Суши");
specialisation.set("Дмитрий", "Десерты");


console.log("Повара и их специализации:");

const spec = Array.from(specialisation);
spec.forEach(element => {
    console.log(element[0] + " - специализация: " + element[1]);
});


const pizza = new Set().add("Пицца Маргарита")
    .add("Пицца Пепперони")
const sushi = new Set().add("Суши Филадельфия")
    .add("Суши Калифорния")
const desert = new Set().add("Тирамису")
    .add("Чизкейк")


const dishes = new Map();
dishes.set("Виктор", pizza);
dishes.set("Ольга", sushi);
dishes.set("Дмитрий", desert);

console.log("");
console.log("Блюда и их повара:");

const key  =Array.from( dishes.keys())

key.forEach(element => {
    const bl = Array.from(dishes.get(element))
    bl.forEach(el => {
        console.log(el +"- повар:"+element);
    });
    
});
console.log("");
const order1 = new Set().add("Пицца Пепперони")
    .add("Тирамису");
const order2 = new Set().add("Суши Калифорния")
    .add("Пицца Маргарита");
const order3 = new Set().add("Чизкейк");
const clientsOrder = new WeakMap();
const client1 = {
    name: "Алексей"
}
const client2 = {
    name: "Мария"
}
const client3 = {
    name: "Ирина"
}



clientsOrder.set(client1, order1);
clientsOrder.set(client2, order2);
clientsOrder.set(client3, order3);



console.log(`Клиент ${client1.name} заказал`, ...clientsOrder.get(client1));
console.log(`Клиент ${client2.name} заказала`, ...clientsOrder.get(client2));
console.log(`Клиент ${client3.name} заказала`, ...clientsOrder.get(client3));

// clientsOrder.forEach(element => {
//     console.log(element);
// });
// console.log(clientsOrder);


