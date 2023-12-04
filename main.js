
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
  return ul
}


// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count) {
  const pairedNumbers = [] //array of paired numbers

  // Generate paired numbers
  for (let i = 0; i < count / 2; i++) {
    const randomNumber = Math.floor(Math.random() * 49) + 1 // Генерируем случайное число (для примера от 0 до 99)
    pairedNumbers.push(randomNumber, randomNumber); // Добавляем пару чисел в массив
  }

  return pairedNumbers

}

const pairedNumbersArray = createNumbersArray(16); // Генерируем пары чисел
console.log(pairedNumbersArray); // Выводим массив с парами чисел

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  let currentIndex = arr.length //current index 

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
  }

  return arr
}

const shuffleArray = shuffle(pairedNumbersArray)
console.log(shuffleArray);

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function startGame(count) {

}