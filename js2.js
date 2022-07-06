// const pass = 'vschbvsd!fdsdvssvsdjcbas'

// if(pass.length > 20 && pass.includes('!')) {
//     console.log('masz rewelacyjne hasło')
// } else if (pass.length > 10){
//     console.log('Masz dobre hasło');
// } else {
//     console.log('Masz za krótkie hasło');
// }



// const day = 'sobota'


// switch(day) {
//     case 'poniedziałek' : 
//         console.log('Dziś jest poniedziałek')
//         break
//     case 'wtorek' : 
//         console.log('Dziś jest wtorek')
//         break
//     case 'środa' : 
//         console.log('Dziś jest środa')
//         break
//     case 'czwartek' : 
//         console.log('Dziś jest czwartek')
//         break
//     case 'piątek' : 
//         console.log('Dziś jest piątek')
//         break
//     default:
//         console.log('weekend')
// }

// const x = 100

// if (x > 20) {
//     console.log(`${x} > 20`)
// } else {
//     console.log(`${x} < 20`);
// }

// const newX = x > 20 ? `${x} > 20` : `${x} < 20`
// console.log(newX);


// const x = 50
// const y = 30

// if(x > y) {
//     console.log(`${x} jest wieksze od ${y}`);
// }

// const color = 'blue'
// const newColor = 'green'

// if(color == newColor) {
//     console.log('kolory się zgadzają');
// } else {
//     console.log('Kolory się nie zgadzaja');
// }


// const x = 100
// const y = 50

// if (x > y) {
//     console.log(`${x} jest większy od ${y}`);
// } else if (x = y) {
//     console.log(`${x} jest równe ${y}`);
// } else {
//     console.log(`${x} jest mniejszy od ${y}`);
// }

// const promo = '20%'

// switch (promo) {
//     case '15%':
//         console.log(`dziś mamy ${promo} promocji`)
//         break
//     case '20%':
//         console.log(`dziś mamy ${promo} promocji`)
//         break
//     case '25%':
//         console.log(`dziś mamy ${promo} promocji`)
//         break
//     default:
//         console.log('inny rabat');
// }

// const x = 10
// const checkX = x % 2
// console.log(checkX);

// if (checkX == '0') {
//     console.log('jest parzysta');
// } else {
//     console.log('jest nieparzysta');
// }

// const x = 150
// let text

// if (x >= 100) {
//     text = `${x} jest większe od 100`
// } else {
//     console.log((`${x} nie jest większe`).toUpperCase())
// }

// if (x < 100 && x > 30) {
//     console.log(`${x} jest średniakiem`);
// } else if(x < 30) {
//     console.log(`${x} jest mały`);
// }

// console.log(text.toUpperCase());


// const colors = ['blue', 'white', 'red']

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

// for (const color of colors) {
//     console.log(color)
//

// const cities = ['Poznań', 'Seul', 'Barcelona']

// for (let i = 0; i < cities.length; i++) {
//     console.log(`To miasto nazywa się ${cities[i]}`);
// }

// let x = 0 
// while (x < 11) {
//     x = x+2
//     console.log(x);
// }

// let x = 20

// do {
//  x = x -3;
//  console.log(x);
// } while (x >= 3)

// const numbers = [5, 8, 10, 23, 48, 60]

// for (number of numbers) {
//     number = number / 5;
//     console.log(number)
// }

// for (number of numbers) {
//     if (number % 2 === 0) {
//         console.log(`Liczba ${number} jest parzysta`, 'background-color:gold')
//     } else {
//         console.log(`Liczba ${number} jest nieparzysta`);
//     }
// }

// unshift - dodaje cyfry na początku tablicy
// shift - usuwa pierwszy element
// push - doadje element na końcu tablicy, metoda destrukcyjna
// pop - usuwa ostatni element

// const numbers = [1, 3, 7, 54,]

// console.log(numbers)

// numbers.unshift(-1, 214123)
// numbers.shift()
// console.log(numbers);

// numbers.push(7)
// numbers.unshift(5)
// numbers.shift()
// numbers.pop()
// console.log(numbers);

// map - działa jak pętla, w nawiasach podajemy nazwę funkcji, której kod ma się wykonać na elementach, zwraca nową tablicę
// concat - metoda niedestrukcyjna, łączy tablice 
// spread - "..." - przy tablicach 
// rest - "..." - przy funkcjach

// const numbers = [1, 3, 7, 54,]

// function multiply(x) {
//     return x * 2

// }
// multiply()


// const newNumbers = numbers.map(multiply)

// const abc = ['a', 'b', 'c']

// const newAbc = numbers.concat(abc)

// console.log(newAbc)
// console.log(...newAbc)

// const drinks = [ 'pepsi', 'kawa', 'sok']
// const meals = ['obiad', 'baton', 'jajko']

// // const menu = meals.concat(meals)
// const menu = [...drinks, ...meals]
// console.log(...menu)



// slice() – metoda niedestrukcyjna 👍
//     pierwszy argument – indeks elementu, od którego wycinamy (włącznie),
//     drugi argument – indeks elementu, do którego wycinamy (ale bez tego elementu).

// splice() – metoda destrukcyjna 💣
//     pierwszy argument – indeks elementu, od którego wycinamy (włącznie),
//     drugi argument – ilość elementów, które wycinamy,
//     każdy kolejny argument – nowy element, który chcemy dodać do tablicy w miejsce wyciętego.


// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(2)
// console.log(numbers2)

// const numbers3 = numbers.slice(0, 5)
// console.log(numbers3);

// const colors2 = colors.splice(3,2)
// console.log(colors2);


// const newCars = cars.splice(2,4)
// console.log(newCars);

// const numbers = [2, 1421, 1231, 12, 45, 56]
// function number (x) {
//     return x % 2 === 0
// }
// console.log(numbers.filter(number));

// numbers.forEach(number => console.log(number); )


// console.log(numbers.includes(10));
// console.log(numbers.indexOff()); - jezeli chcemy sprawdzic czy nasza tablica niczego nie zawiera, to indexOff zwraca -1 jeśli nie ma


//map vs for each
// for each - metoda która niczego nie zwraca
// map - zwraca
// const numbers = [1, 2, 3]

// const newNumbers = numbers.forEach(number => console.log(number * 2))
// const mapNumbers = numbers.map(number => console.log(number * 2))


// console.log(newNumbers);
// console.log(mapNumbers);


// const letters = ['c', 'd']
// letters.unshift('a', 'b')
// letters.push('e')
// console.log(letters);
// console.log(letters.includes('c'));

// const numbers = [1, 2, 3]
// const meals = ['pizza', 'rosół', 'bigos']

// const menu = [...numbers, ...meals]
// console.log(...menu);


// const numbers = [1, 5, 13, 26, 48]

// const mapNumbers = numbers.map(number => number * 5)
// console.log(mapNumbers);

// for(const number of mapNumbers) {
//     if(number % 2 === 0 ) {
//     console.log(`Libcza ${number} jest przysta`)
//     } else {
//     console.log(`Liczba ${number} jest nieparzysta`);
//     }
// }


// const colors = ['blue']

// colors.push('white')
// colors.unshift('black')
// console.log(colors);

// for (let i = 0; i < colors.length; i++) {
//     console.log(`Mój ulubiony kolor to ${colors[i].charAt(0).toUpperCase() + colors[i].slice(1)}`);

// }

// const cars = 'Audi, Mercedes, BMW, Nissan, Doge'
// const newCars = cars.split(',')
// console.log(newCars);

// if (newCars.length > 3) {
//     console.log('jest ok');
// } else {
//     console.log('nie jest ok');
// }


// if (newCars.includes('Audi')) {
//     newCars.push('new brand')
// } else {
//     newCars.pop()
// }

// console.log(newCars);

// FUKCJE
// return zwraca wartosc, konczy działanie funkcji

// function test(x, y) {
//     console.log(`Cześć mam na imię ${x} i mam ${y} lat`)
// }

// test('Paweł', 29)

// funkcja anonimowa, robi jedną linijkę kodu, nie korzystamy, chyba że w for each

// const heading = document.querySelector('h1')

// heading.addEventListener('click', function(){
//     console.log('klinkięto mnie');
// })

// function test() {
//     console.log('kliknięto mnie');
// }

// heading.addEventListener('click', test)


//funkcja strzałkowa

// const test = name => {
//     console.log(`Mam na imię ${name}`);
// }

// test('Lisa')


// const test2 = name => console.log(`Mam na imię ${name}`);
// test2('Paweł')

// const days = ['poniedziałek', 'wtorek', 'środa']

// const day = days.forEach(day => console.log(day))

// domyślne parametry funkcji
// const hello = (name = 'drogi użytkowniku') => {
//     console.log(`Cześć ${name}, jak się masz`);
// }

// hello()


// ... operator spread

// const arr = [1, 2, 3,4]
// console.log(arr);
// console.log(...arr);

// // rest - dodajemy ... przed ostatnim parametrem, dodaje wszystkie elementy 
// const numbers = (x, y, z) => {
//     console.log(x, y, z);    
// }

// numbers(231, 1231232, 43123, 56, 4, 7)

// const numbers = [0, 5, 3, 54]
// const names = ['Lisa', 'Lily','Janusz'] 
// numbers.forEach(num => console.log(num * num))

// const bigNames = names.map(name => name.toUpperCase())
// console.log(bigNames);

// const showBigNames = (name) => {
//     console.log(name.toUpperCase());
// }
// //callback
// names.forEach(showBigNames)

// let score

// const add = (x, y) => {
//     score = x + y
//     if(score % 2 === 0) {
//        parzysta()
//     } else {
//         nieparzysta()
//     }
// }

// const parzysta = () => {
//     console.log(`Liczba ${score} jest parzysta`);
// }

// const nieparzysta = () => {
//     console.log(`Liczba ${score} jest nieparzysta.`);
// }

// add(1,2)

// let celcius
// let temp

// const fahrenheit = (x) => {
//     celcius = x
//     temp = (x * 1.8) + 32
//     console.log(`${x} stopni celcjusza to ${temp} stopni F`);
// }

// fahrenheit(10)


// const num = 10
// const numbers = []

// for(let i = 0; i<num; i++) {
//     numbers.push(i)

// }
// console.log(numbers);

// const check = (number) => {
//     if(number % 3 === 0 && number !== 0) {
//         console.log(`${number} podzielne przez 3`);
//     } else {
//         console.log(`${number} niepodzielne przez 3`);
//     }
// }

// check(9)

// numbers.forEach(check);

// const test = document.getElementById('item')
// console.log(test);

// const test2 = document.getElementsByTagName('ul')
// console.log(test2);

// const test3 = document.getElementsByClassName('test')
// console.log(test3);



// query sellector query sellecot all

// const test = document.querySelector('li')
// console.log(test);

// const test2 = document.querySelectorAll('li')
// console.log(test2);

// const heading = document.querySelector('h1')
// console.log(heading);


// const p = document.querySelectorAll('p')
// console.log(p);

// const div = document.querySelectorAll('div.test')
// console.log(div);

// const lastP = document.querySelector('#test')
// console.log(lastP);


// const li = document.createElement('li')
// li.textContent = 'siema'

// document.body.appendChild(li)


// const div = document.querySelector('div')
// const newP = document.createElement('p')

// div.appendChild(newP)

// append i appendchild

// const div = document.querySelector('div')
// const p = document.createComment('p')
// const headingTwo = document.createElement('h2')

// div.appendChild(p)
// div.appendChild(headingTwo)

// div.append(p, headingTwo)


// outherHTML = moglismy skasowac przycisk i podmienic stringiem

// const btn = document.querySelector('button')

// console.log(btn.outerHTML);
// btn.outerHTML = '123'

// // innerHTML - dodaje tekst w srodku elementu, pracujemy z zawartoscia

// btn.innerHTML = '<li>123</li>'

// innerText - wyswielta text w przycisku, pracujemy z trescia
// tak samo innerText jak textcontent
// textcontect - dodaje tekst 


// remove child - usuwanie elementu

// const div = document.querySelector('div')
// const p = document.querySelector('p')

// div.removeChild(p)
// document.body.replaceChild(div)


// // remove 
// div.remove()

// addeventlistener

// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')


// btn1.addEventListener('click', function () {
//     console.log('Kliknięto mnie');
// })
// btn2.addEventListener('mouseover', () => {
//     console.log('najechano na mnie');
// })



// const test = () => {
//     console.log('double click');
// }

// btn3.addEventListener('dblclick', test)

// const btn = document.querySelector("button")

// const test = (e) => {
//     console.log(e.target);
// }

// btn.addEventListener('click', test)

// const lime = document.querySelector('.lime')
// const blue = document.querySelector('.blue')
// const gold = document.querySelector('.gold')

// const infoBlue = () => {
//         console.log('%cten kod nie miał się teraz wykonać', 'color: blue; text-transform: uppercase')}
// const infoGold = (e) => {
//             e.stopPropagation()
//             console.log('%cwykonuje jakiś kod', 'color: gold; text-transform: uppercase')}
            



// blue.addEventListener('click', infoBlue)
// gold.addEventListener('click', infoGold)


// const lime = document.querySelector('.lime')
// const gold = document.querySelector('.gold')

// const newCircle = document.createElement('div')
// newCircle.classList.add('circle', 'purple')
// gold.append(newCircle)

// const allCircles = document.querySelectorAll('.circle')

// allCircles.forEach(circle => circle.addEventListener('click', () => console.log(circle)))

// console.log(allCircles.length);

// const addBtn = document.querySelector('.add')
// const removeBtn = document.querySelector('.remove')
// const toggleBtn = document.querySelector('.toggle')
// const text = document.querySelector('p')

// const addClass = () => {
//     text.classList.add('test')
// }
// const removeClass = () => {
//     text.classList.remove('test')
// }
// const toggleClass = () => {
//     text.classList.toggle('test')
// }


// addBtn.addEventListener('click', addClass)
// removeBtn.addEventListener('click', removeClass)
// toggleBtn.addEventListener('click', toggleClass)


// const ulList = document.createElement('ul')
// document.body.append(ulList)
// const number = 10

// for(let i=1; i <= number; i++) {
//     const liItem = document.createElement('li')
//     liItem.textContent = i
//     ulList.append(liItem)
// }

// const lastLi = ulList.querySelector('li:last-child')
// lastLi.textContent= 'Jestem ostatnim elementem'


// lastLi.style.backgroundColor= 'royalblue'
// lastLi.style.padding= '20px 40 px'
// lastLi.style.fontSize= '48px'
// console.log('hej');
// const test = () => {
//     console.log('elo');
// }
// setTimeout(test, 500)

// setInterval(test, 10000)

// 'use strict'
// const colors = ['red', 'green', 'blue']

// for(let color of colors) {
//     console.log(color);
//}

// alert('cześć')

// if (confirm('chcesz jeść?')){
//     console.log('ok');
// } else {
//     console.log('nie to nie');
// }

// const name = prompt('hej, jak masz na imię?')
// console.log(name);

// console.log(Math.max(5,10,54));
// const number = Math.random()*10



// console.log(Math.floor(number));

const link = document.querySelector('a')
const img = document.querySelector('img')
const p = document.querySelector('p')

