// init
function alert(args) {
  console.log(`%c${args}`, "color: yellow;");
}

// 1
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

const styles = [`jazz`, `blues`];
styles.push(`rock-n-roll`);
styles[styles.indexOf(`blues`)] = `classic`;

const logItems = array => {
  for (const entity of array) console.log(`${array.indexOf(entity) + 1} - ${entity}`);
  // array.forEach((element, index) => console.log(`${index + 1} - ${element}`));
};
logItems(styles);

// 2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

const logins = ["Peter", "John", "Igor", "Sasha"];
// const userName = "Sasha";
const userName = "Mikola";
// const userName = prompt("Enter your name").trim();
logins.includes(userName) ? alert(`Welcome, ${userName}!`) : alert("User not found");

// 3
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

const calculateAverage = (...args) => {
  let error,
    sum = 0;
  args.forEach(number => (isNaN(number) ? (error = true) : (sum += number)));
  return error ? "Error" : sum / args.length;

  //   let error;
  //   args.forEach(arg => isNaN(arg) && (error = true));
  //   return error ? "Error" : args.reduce((acc, num) => acc + num, 0) / args.length;

  //   const result = args.reduce(
  //     (acc, num) => (isNaN(num) ? { ...acc, error: true } : { ...acc, sum: acc.sum + num }),
  //     { sum: 0, error: false }
  //   );
  //   return result.error ? "Error" : result.sum / args.length;
};
console.log(calculateAverage(4, 5, 6));
console.log(calculateAverage(4, "a", 6));

// 4
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

const neighbour = array => {
  return array.reduce(
    (acc, num, index, array) => (
      !isNaN(array[index + 1]) && acc.push(num + array[index + 1]), acc
    ),
    []
  );
};
console.log(neighbour([22, 11, 34, 5, 12, 13, 14, 15]));

// 5
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const findSmallestNumber = numbers => {
  return !(numbers instanceof Array) ? "Sorry, it is not an array!" : Math.min(...numbers);
};
console.log(findSmallestNumber(1));
console.log(findSmallestNumber([2, 5, 35, 56, 12, 24, 7, 80, 3]));

// 6
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.
// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

const findLongestWord = string => {
  return string
    .split(" ")
    .reduce((acc, word) => (acc.length < word.length ? (acc = word) : acc), "");
};
console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// 7
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

const userUpdate = () => {
  const user = {
    name: "John",
    age: 20,
    hobby: "tenis",
    premium: true,
  };
  user.mood = `happy`;
  user.hobby = `skydiving`;
  user.premium = false;

  // for (const key in user) {
  const keys = Object.keys(user);
  for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
  }
};
userUpdate();

// 8
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salariesSum = () => {
  const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
  };
  return Object.values(salaries).reduce((acc, salary) => acc + salary, 0);
};
console.log(salariesSum());

// 9
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  a: null,
  b: null,
  read(a, b) {
    this.a = a;
    this.b = b;
    return this;
  },
  sum() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
  exist() {
    return !!this.a || !!this.b ? true : false;
  },
};
console.log(calculator.exist());
console.log(calculator.read(10, 20).exist());
console.log(calculator.sum());
console.log(calculator.mult());

// 10
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const calcTotalPrice = (fruits, fruitName) => {
  return fruits.reduce(
    (acc, fruit) => (fruit.name === fruitName && (acc += fruit.price * fruit.quantity), acc),
    0
  );

  //   let total = 0;
  //   fruits.forEach(fruit => {
  //     fruit.name === fruitName ? (total += fruit.price * fruit.quantity) : null;
  //   });
  //   return total;
};

const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];
console.log(calcTotalPrice(fruits, "Груша")); // 700
console.log(calcTotalPrice(fruits, "Банан")); // 1375
