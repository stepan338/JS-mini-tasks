// 7 Формы
// Эта страница содержит описание мини-задания для блока JS.

// Описание
// В этой мини-задаче у вас цель - поработать с формами в HTML и соединить верстку с JS.

// Задача
// Необходимо сверстать макет (вспомним верстку, еще раз добавим практику)
// https://www.figma.com/file/a68hsMcQZ9Wi1NhmBiKnDo/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%B8%D0%BD%D0%B8-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8?type=design&node-id=0-1&mode=design&t=RY5gA4oNRqG2XsTY-0

// После того как макет сверстан. При нажатии на кнопку "Регистрация" должна происходить проверка введенных данных:
// - Если email не указан, поле должно стать красным (см. макет) и под полем должна появиться ошибка: "Поле обязательно для заполнения"
// - Если email указан, но невалидный, поле должно стать красным и под полем должна появиться ошибка: "Email невалидный"
// - Если пароль не указан, поле должно стать красным (см. макет) и под полем должна появиться ошибка: "Поле обязательно для заполнения"
// - Если пароль указан, но длина меньше 8, поле должно стать красным и под полем должна появиться ошибка: "Пароль должен содержать как минимум 8 символов"
// - Если чекбокс не отмечен, поле должно стать красным и должна появиться ошибка: "Поле обязательно для заполнения"
// - Если данные были введены верно, то при нажатии на "Регистрация" в консоль должен выводиться объект с данными:
// // должны быть данные, введённые пользователем
// {
//     email: 'johndoe@mail.ru',  // email произвольный
//     password: 'password'        // password  произвольный
// }

// Дополнительные материалы
// Проверка email на валидность с помощью регулярных выражений
// function validateEmail(email) {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const emailInput = document.querySelector("#email__field-input");
const emailError = document.querySelector("#email__error");
const passwordInput = document.getElementsByClassName("password__field-input")[0];
const passwordError = document.getElementById("password__error");
const checkBoxInput = document.querySelector("#checkbox__field");
const checkBoxError = document.getElementsByClassName("checkbox__field")[0];
const checkBoxErrorText = document.getElementById("checkbox__error");

export function filingCheck() {
  let emailCheck
  let passwordCheck
  let checkBoxCheck

  const emailValue = emailInput.value; // получаем введённое значение email
  if (emailValue == "") {
    // проверка на заполнение
    emailInput.classList.add("email__field-input-error"); // добавляем выделение красным для email
    emailError.textContent = "Поле обязательно для заполнения"; // добавляем подпись для email
  } else if (!validateEmail(emailValue)) {
    // валидатор почты
    emailInput.classList.add("email__field-input-error"); // добавляем выделение красным для email
    emailError.textContent = "Email невалидный"; // добавляем подпись для email
  } else {
    emailInput.classList.remove("email__field-input-error"); // убирает выделение красным для email
    emailError.textContent = ""; // убирает подпись для email
    emailCheck = true;
  }

  const passwordValue = passwordInput.value; // получаем введённое значение password
  if (passwordValue == "") {
    // проверка на заполнение
    passwordInput.classList.add("password__field-input-error"); // добавляем выделение красным для password
    passwordError.textContent = "Поле обязательно для заполнения"; // добавляем надпись для password
  } else if (passwordValue.length < 8) {
    // проверка на длину
    passwordInput.classList.add("password__field-input-error"); // добавляем выделение красным для password
    passwordError.textContent =
      "Пароль должен содержать как минимум 8 символов"; // добавляем надпись для password
  } else {
    passwordInput.classList.remove("password__field-input-error"); // убирает выделение красным для password
    passwordError.textContent = ""; // убирает надпись для password
    passwordCheck = true;
  }

  const checkBoxValue = checkBoxInput.checked; // получаем введённое значение checkbox
  if (!checkBoxValue) {
    checkBoxError.classList.add("checkbox__field-error"); // добавляем выделение красным для checkbox
    checkBoxErrorText.textContent = "Поле обязательно для заполнения"; // добавляем надпись для checkbox
  } else {
    checkBoxError.classList.remove("checkbox__field-error"); // убирает выделение красным для checkbox
    checkBoxErrorText.textContent = ""; // убирает надпись для checkbox
    checkBoxCheck = true;
  }

  const reg = {
    email: emailValue,
    password: passwordValue,
  }

  if (emailCheck && passwordCheck && checkBoxCheck) {
    console.log(reg)
  }

}

document.querySelector("#login__button").addEventListener("click", filingCheck);