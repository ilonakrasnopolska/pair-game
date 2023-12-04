//array of picture
const images = [
  './img/dog1.png',
  './img/dog2.png',
  './img/dog3.png',
  './img/dog4.png',
  './img/dog5.png',
  './img/dog6.png',
  './img/dog7.png',
  './img/dog8.png',
  './img/dog9.png',
]

//function create div 
function createDiv(className) {
  let div = document.createElement('div')
  div.classList.add(className)
  return div
}

//function create title
function createTitle(className, text) {
  let title = document.createElement('h1')
  title.classList.add(className)
  title.textContent = text
  return title
}

//function create paragraph 
function createParagraph(className, text) {
  let paragraph = document.createElement('p')
  paragraph.classList.add(className)
  paragraph.textContent = text
  return paragraph
}

//function create ul
function createList(className) {
  let ul = document.createElement('ul')
  ul.classList.add(className)
  ul.classList.add('row')
  return ul
}

// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count) {
  const numbers = Array.from({ length: 9 }, (_, index) => index + 1); // Создаем массив чисел от 1 до 9

  const pairedNumbers = [] //array of paired numbers

  // Generate paired numbers
  for (let i = 0; i < count / 2; i++) {
    const randomNumber = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]; // Генерируем случайное число (для примера от 0 до 99)
    pairedNumbers.push(randomNumber, randomNumber); // Добавляем пару чисел в массив
  }

  return pairedNumbers

}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffleNumbers(arr) {
  let currentIndex = arr.length //current index 

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
  }

  return arr
}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function createNewANumbersArr(count) {
  const shuffleNumbersArr = createNumbersArray(count);
  const numbersWithImages = shuffleNumbersArr.map(number => {
    return {
      number: number,
      image: images[number - 1] // Назначаем изображение по соответствующему числу (-1, так как индексация начинается с 0)
    };
  });

  return shuffleNumbers(numbersWithImages); // Перемешиваем массив с числами и изображениями
}

//Func create dom-element to card of game 
function createCardOfGame(text,img) {
  const card = document.createElement('li') //create li
  card.classList.add('card')
  card.classList.add('col-3')

  card.addEventListener('click', () => { 
   card.classList.toggle('card-active')
  })

  let image = document.createElement('img'); // create img
  image.classList.add('card__image');
  image.src = img; // src to img
  
  let number = createParagraph('card__number', text) //create p 

  card.append(image, number) //add p to li

  return card
}

//Func to start game
function startGame(arr) {
  for(i = 0; i < arr.length; i++) {
    let createCard = createCardOfGame(arr[i].number, arr[i].image)
    cardBox.append(createCard)
  }
}


const container = createDiv('container') //container
const title = createTitle('title', 'Pair Game') //title
const cardBox = createList('card-box') //ul element for cards

startGame(createNewANumbersArr(16)) //call func start game

container.append(title, cardBox) //add title to container
document.body.append(container) //add container to body