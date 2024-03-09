// Задача
// Спросите у пользователя `Перечислите возможный доход за ваши дополнительные работы: ${profit}?`  и сохраните в новую переменную extraMoney.
// Объявить функцию getAccumulatedIncome, переменную budgetMonth удаляем.
// Функция возвращает накопления за месяц (доходы минус расходы), учитывайте переменную extraMoney.
// Объявить переменную accumulatedIncome и присвоить ей результат вызова функции getAccumulatedIncome.
// Объявить функцию getTargetMonth. Функция *getTargetMonth* будет расчитывать за какой период будет достигнута цель, зная результат месячного накопления (accumulatedIncome) и возвращать результат.
// Рассчитайте переменную budgetDay исходя из значения месячного накопления (accumulatedIncome).
// Выведите 3 строчки в консоль, чтобы по итогу у вас получился такой результат:
// Ваш бюджет на месяц с учетом ваших расходов составляет: {*результат ваших подсчетов}*
// Ваша цель накопить {цель накоплений} с учетом всех ваших расходов будет достигнута через {результат ваших подсчетов} месяца
// Дневной бюджет: {ваш дневной бюджет}

// А теперь посложнее..
// В этом мини-задании нет блока “А теперь посложнее..”

let money = prompt("Ваш месячный доход?");
let amount = prompt("Во сколько обойдутся обязательные статьи расходов?");
let purpose = prompt("Какую сумму хотите накопить?");
let profit = 'freelance';
let extraMoney = prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}`);

function getAccumulatedIncome() {
  return (+money + +extraMoney - +amount);
}
let accumulatedIncome = getAccumulatedIncome();

function getTargetMonth() {
  return purpose / accumulatedIncome;
}

let budgetDay = Math.floor(accumulatedIncome / 30);

console.log(`Ваш бюджет на месяц с учетом ваших расходов составляет: ${accumulatedIncome}`);
console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через ${Math.floor(getTargetMonth())} месяца`);
console.log(`Дневной бюджет: ${budgetDay}`)
