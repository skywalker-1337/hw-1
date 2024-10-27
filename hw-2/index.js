// Задание 1
let number = Number(prompt('Пожалуйста, введите любое число'));

if (isNaN(number)) {
    alert('Введенное значение не является числом, попробуйте еще раз');
} else if (number % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

// Задание 2
let c = Number(prompt('Введите число'));

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3
let d = Number(prompt('Введите первое число'));

let e = Number(prompt('Введите второе число'));

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4
let a = '2';

let b = '3';

alert(+a + +b);

// Задание 5
let monthNumber = Number(prompt('Введите номер месяца:'));

switch (monthNumber) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весная');
        break;
    case 4:
        console.log('Весная');
        break;
    case 5:
        console.log('Весная');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;
    default:
        console.log('Вы ввели неверный номер месяца, попробуйте еще раз от 1 до 12');
        break;
}