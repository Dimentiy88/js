// *Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log("total: ", total);

// const diff = grapes - apples;
// console.log("diff: ", diff);

// *Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

// *Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// // 2 * 5 = 10
// // 108 + 223 = 331
// // 331 - 10 = 321
// console.log(result);

// *Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = Math.floor(27.5);
// console.log("value: ", value);

// const value = Math.ceil(27.3);
// console.log("value: ", value);

// const value = Math.round(27.3);
// console.log("value: ", value);

// *Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

//* Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const correctAnswer = "ECMAScript";
// let userAnswer = "";

// userAnswer = prompt("Яка офіційна назва JavaScript?");

// if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//   alert("Правильно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

//* Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} г. ${minutes} хв.`;
// } else {
//   timestring = `${hours} г.`;
// }
// console.log(timestring);

// *Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

let link = "https://somesite.com/about";
// Пиши код нижче за цей рядок
if (link.endsWith("/")) {
  console.log("Значення змінної link вже закінчується символом /");
} else {
  link += "/";
  console.log(`Значення змінної link було доповнено: ${link}`);
}
// Пиши код вище за цей рядок
console.log(link);
