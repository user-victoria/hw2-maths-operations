// Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
// Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:

// Користувач ввів 2 і 2:
// 2+2=4
// 2-2=0
// 2*2=4
// 2/2=1

let num1 = +prompt('Write a number');
let num2 = +prompt('Write one more number');

if (!Number(num1) || !Number(num2)) {
    alert('Please, write a number');
}
else {
    alert(`
        ${num1}+${num2} = ${num1 + num2}
        ${num1}-${num2} = ${num1 - num2}
        ${num1}*${num2} = ${num1 * num2}
        ${num1}/${num2} = ${num1 / num2}
    `);
}