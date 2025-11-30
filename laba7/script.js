// 1. Вывод значения с помощью console.log
console.log("Привет, мир! Это сообщение выведено с помощью console.log");

// 2. Создание двух переменных с числами
let number1 = 15;
let number2 = 7;

// Выводим переменные на экран (в HTML)
document.getElementById('variables-output').textContent = 
    `Первая переменная: ${number1}\nВторая переменная: ${number2}`;

// 3. Сложение двух переменных
let sum = number1 + number2;
document.getElementById('addition-output').textContent = 
    `${number1} + ${number2} = ${sum}`;

// 4. Преобразование строки в верхний и нижний регистр
let sampleString = "JavaScript - это интересно!";
let upperCaseString = sampleString.toUpperCase();
let lowerCaseString = sampleString.toLowerCase();

document.getElementById('string-output').textContent = 
    `Исходная строка: ${sampleString}\n` +
    `В верхнем регистре: ${upperCaseString}\n` +
    `В нижнем регистре: ${lowerCaseString}`;

// 5. Базовые операции над числами
let a = 20;
let b = 6;

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let exponentiation = a ** 2; // Возведение в квадрат
let remainder = a % b; // Остаток от деления

document.getElementById('operations-output').textContent = 
    `Числа: a = ${a}, b = ${b}\n\n` +
    `Сложение: ${a} + ${b} = ${addition}\n` +
    `Вычитание: ${a} - ${b} = ${subtraction}\n` +
    `Умножение: ${a} * ${b} = ${multiplication}\n` +
    `Деление: ${a} / ${b} = ${division}\n` +
    `Возведение в квадрат: ${a}² = ${exponentiation}\n` +
    `Остаток от деления: ${a} % ${b} = ${remainder}`;

// 6. Дополнительные задания

// Задание 1: Проверка четности числа
function isEven(num) {
    return num % 2 === 0;
}

// Задание 2: Конвертер температуры из Цельсия в Фаренгейт
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let testNumber = 24;
let testTemperature = 25;

document.getElementById('extra-output').textContent = 
    `Задание 1: Проверка четности числа\n` +
    `Число ${testNumber} является четным: ${isEven(testNumber)}\n\n` +
    `Задание 2: Конвертер температуры\n` +
    `${testTemperature}°C = ${celsiusToFahrenheit(testTemperature)}°F`;

// Выводим дополнительную информацию в консоль
console.log("Дополнительные задания:");
console.log(`Число ${testNumber} является четным: ${isEven(testNumber)}`);
console.log(`${testTemperature}°C = ${celsiusToFahrenheit(testTemperature)}°F`);