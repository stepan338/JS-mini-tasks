// Задача
// Создать переменные и присвоить им значения:

// - money - любое число которое обозначает ваш месячный бюджет (number)
// - profit - строка с дополнительным доходом (например: фриланс) (string)
// - expenses - строка с дополнительными расходами через запятую (например: питание, проезд) (string)
// - purpose - любое число (Какую сумму хотите накопить) (number)
// - period - число от 1 до 12 (месяцев) (number)

// После создания переменных, вам нужно:

// - Вывести в консоль **тип данных** значений переменных money и profit
// - Вывести в консоль **длину** строки expenses
// - Вывести в консоль “**Период равен (period) месяцев**” и “**Цель заработать (purpose) рублей/долларов** ”
// - Объявить еще одну переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
// - Вывести в консоль budgetDay

// А теперь посложнее..
// Вам нужно привести всю строку expenses к нижнему регистру и разбить строку на массив. После выведите массив в консоль.

let money = 65000;
let profit = 'freelance';
let expenses = 'Аренда, Питание, Коммунальные';
let purpose = 1000000;
let period = 12;

console.log('Тип данных money:', typeof (money))
console.log('Тип данных money:', typeof (profit))
console.log('Длина строки expenses:', expenses.length)
console.log('Период равен', period, 'месяцев ' + 'Цель заработать', purpose, 'рублей')

let budgetDay = money / 30
console.log('Дневной, бюджет:', Math.round(budgetDay))

let expensesLowerCase = expenses.toLowerCase().split(', ')
console.log(expensesLowerCase)
