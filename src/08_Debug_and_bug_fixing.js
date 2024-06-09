// 8 Debug and bug fixing
// Эта страница содержит описание мини-задания для блока JS.

// Описание
// В этой мини-задаче у вас цель - разобраться в чужом коде и исправить все ошибки

// Задача
// Скачать архив и попробовать открыть макет локально. Проверить что все работает.
// https://drive.google.com/file/d/1gB-LOm8pjqvmQgLL4F9xJOW0lib8jbIJ/view

// Что нужно исправить:
// - Восстановить порядок книг (поправить HTML разметку)
// - Заменить картинку заднего фона на другую из папки image
// - Исправить заголовок в книге 3 (Получится - "Книга 3. this и Прототипы Объектов")
// - Удалить рекламу со страницы
// - Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
// - в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место


// - Восстановить порядок книг (поправить HTML разметку)
const books = document.querySelector('.books');
const arrBooks = [...books.children];
function sortBooks(arr) {
  arr
    .sort((a, b) => a.innerText > b.innerText ? 1 : -1)
    .forEach(node => books.appendChild(node));
};
sortBooks(arrBooks);

// - Заменить картинку заднего фона на другую из папки image
let bodyImage = () => document.querySelector('body').style.backgroundImage = "url('/image/you-dont-know-js.jpg')";
bodyImage();


// - Исправить заголовок в книге 3 (Получится - "Книга 3. this и Прототипы Объектов")
function updateBook3Title(arr) {
  arr.forEach(item => {
    if (item.textContent.includes('Книга 3')) {
      item.children[0].children[0].innerText = 'Книга 3. this и Прототипы Объектов';
    }
  })
};
updateBook3Title(arrBooks);

// - Удалить рекламу со страницы
let delBanner = () => document.querySelector('.adv').remove();
delBanner();

// - Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
function sortBookChapter(arr) {
  arr.forEach(item => {
    const parentUl = item.querySelector('ul')
    const arrChild = [...item.getElementsByTagName('li')]
    let alphabetNumbers = []  // цифры + латиница
    let cyrillicLetters = []  // только кирилица
    arrChild.forEach((item, index) => {
      if (/[A-Za-z0-9]/.test(arrChild[index].innerText)) {
        alphabetNumbers.push(item)
      } else {
        cyrillicLetters.push(item)
      }
    })
    cyrillicLetters.sort((a, b) => a.innerText > b.innerText ? 1 : -1)
    alphabetNumbers.sort((a, b) => a.innerText > b.innerText ? 1 : -1)
    cyrillicLetters
      .concat(alphabetNumbers)
      .forEach(node => parentUl.appendChild(node))
  })
}
sortBookChapter(arrBooks);

// - в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
function updateBook6chapter(arr) {
  arr.forEach(item => {
    if (item.textContent.includes('Книга 6')) {
      const chapter8 = document.createElement('li');
      chapter8.innerHTML = "Глава 8: За пределами ES6";
      const parentChapter8 = item.querySelector('ul');
      const chapter9 = parentChapter8.children[9];
      parentChapter8.insertBefore(chapter8, chapter9);
    }
  })
}
updateBook6chapter(arrBooks)