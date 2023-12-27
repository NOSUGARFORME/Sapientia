// Strings
let str = "inodm";
console.log(str[0], str[2], str[3]);

const num = 3;
console.log(str[num]);

console.log(str[str.length - 2]);

str = "12543";
console.log(str.split("").reduce((sum, char) => sum + +char, 0));

let regex = /\b[iI][nN]*[iI]\b/g;
str = "ii ini inni innni inoi inmi";
console.log(str.match(regex));

str = "aAXa aeffa aGha aza ax23a a3sSa";
regex = /\b[a][a-z]*[a]\b/g;

const str1 = "inno";
const str2 = "Dom";

const result = str2.charAt(0).toUpperCase() + str2.slice(1) + str1;

console.log(result); // "DomInno"

regex = /\b[iI](.*?)*[iI]\b/g;
str = "ii ini inni innni inoi inmi";
console.log(str.match(regex));

const reverseStr = (str) => str.split("").reverse().join("");
console.log(reverseStr("innoDom"));

// Logical expressions
const inputNumber = +prompt("Введите число:");
if (inputNumber % 2 === 0) alert("Число четное");

const textInput = prompt(
  "Введите язык программирования, на котором Вы работаете:"
);
const backendLanguages = ["python", "java", "c++"];
const fronedLanguages = ["javascript", "js"];
if (backendLanguages.includes(textInput.toLowerCase())) {
  alert("Вы backedер!");
} else if (fronedLanguages.includes(textInput.toLowerCase())) {
  alert("Вы frontendер!");
} else {
  alert("Я не знаю кто Вы");
}

textInput = prompt(
  "Enter the language you are currently speaking:"
).toLowerCase();
switch (textInput) {
  case "russian":
    alert("Привет");
    break;
  case "english":
    alert("Heloo");
    break;
  case "italian":
    alert("Ciao");
    break;
  case "spanish":
    alert("Hola");
    break;
  case "french":
    alert("Salut");
    break;
  default:
    alert("Sorry, I don't know this language");
    break;
}

if (textInput === "russian") alert("Привет");
else if (textInput === "english") alert("Hello");
else if (textInput === "italian") alert("Ciao");
else if (textInput === "spanish") alert("Hola");
else if (textInput === "french") alert("Salut");
else alert("Sorry, I don't know this language");

const klava = () => {
  while (textInput != "пока") {
    textInput = prompt("Диалог с Клавой").toLowerCase();
    switch (textInput) {
      case "как тебя зовут?":
        alert("Клава");
        break;
      case "как у тебя дела?":
        alert("Хорошо, а у тебя?");
        break;
      case "сколько тебе лет?":
        alert("Много-много");
        break;
      case "пока":
        return;

      default:
        alert("Я еще не знаю таких слов");
        break;
    }
  }
};

klava();

const err = () => {
  try {
    textInput = +prompt("Enter any text");
  } catch (error) {
    throw new CustomError("проброс ошибки");
  } finally {
    alert("it's a conclusion either way");
  }
};

try {
  err();
} catch (error) {
  console.error(error.name);
}

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "customError";
  }
}

// Loops
const number = +prompt("Введите число от 1 до 10");
for (let x = 0; x < number; x++) {
  console.log(x);
}

let i = 1;
while (i < 10) {
  console.log(i);
  i += 2;
}

for (i = 0; i < 10; i += 2) {
  console.log(i);
}

const drawPyramid = (lines) => {
  for (let i = 1; i <= lines; i++) {
    let spaces = " ".repeat(lines - i);
    let hashes = "#".repeat(2 * i - 1);
    console.log(spaces + hashes);
  }
};

let lines = prompt("Введите количество строк (от 1 до 9):");
lines = parseInt(lines);

if (lines >= 1 && lines <= 9) {
  drawPyramid(lines);
} else {
  console.log("Введите корректное значение от 1 до 9.");
}

const squareRange = (number) => {
  for (let i = 1; i <= number; i++) {
    console.log(i ** 2);
  }
};

const factorial = (n) => {
  let res = 1,
    i;
  for (i = 2; i <= n; i++) res *= i;
  return res;
};

const factorialRange = (n) => {
  for (let i = 1; i < n; i++) {
    console.log(factorial(i));
  }
};

const fib = (n) => {
  const sqrt5 = Math.sqrt(5);
  const gr = (1 + sqrt5) / 2;
  return Math.round((1 / sqrt5) * (Math.pow(gr, n) - Math.pow(1 - gr, n)));
};

const fibRange = (m) => {
  for (let n = 1; n < m; n++) {
    console.log(fib(n));
  }
};

let numb = prompt("Введите число (от 1 до 10):");
numb = parseInt(numb);

if (numb >= 1 && numb <= 10) {
  console.log("Возведение в квадрат:");
  squareRange(numb);

  console.log("Факториал:");
  factorialRange(numb);

  console.log("Фибоначчи:");
  fibRange(numb);
} else {
  console.log("Введите корректное значение от 1 до 10.");
}

const drawRomb = (lines) => {
  const pyramidHeight = Math.floor(lines / 2) + 1;

  for (let i = 1; i <= pyramidHeight; i++) {
    const hashs = "#".repeat(2 * i - 1);
    const stars = "*".repeat((2 * pyramidHeight - 1 - hashs.length) / 2 + 1);
    console.log(stars + hashs + stars);
  }

  for (let i = pyramidHeight - 1; i >= 1; i--) {
    const hashs = "#".repeat(2 * i - 1);
    const stars = "*".repeat((2 * pyramidHeight - 1 - hashs.length) / 2 + 1);
    console.log(stars + hashs + stars);
  }
};

const linesInput = prompt("Введите нечетное число от 1 до 9");
lines = parseInt(linesInput);

if (lines % 2 === 0 || lines < 1 || lines > 9) {
  console.log("Вы ввели некорректное значение");
} else {
  drawRomb(lines);
}

outerloopfor: for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 3) {
      break outerloopfor; // This will break out of the outer loop when j equals 3.
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

i = 1;
outerloopwhile: while (i <= 5) {
  let j = 1;
  while (j <= 5) {
    if (j === 3) {
      j++;
      continue outerloopwhile;
    }
    console.log(`i = ${i}, j = ${j}`);
    j++;
  }
  i++;
}

{
  outerloop: for (let i = 1; i <= 3; i++) {
    middleloop: while (i <= 3) {
      innerloop: do {
        if (i === 2) {
          i++; // Skip iteration of the middleloop when i equals 2.
          continue middleloop;
        }
        if (i === 3) {
          break outerloop; // Break out of the outerloop when i equals 3.
        }
        console.log(`i = ${i}`);
        i++;
      } while (false); // This do-while loop runs only once.
    }
  }
}

// Functions
const sayHello = () => console.log("Hello, world");

const getSquare = (num) => num ** 2;

const isEven = (num) => num % 2 === 0;

const getGreeting = (name) => `Hello, ${name}`;

const calculateDiff = (a, b) => a - b;

const applydiscount = (price, percentage) => price - (price * percentage) / 100;

const delayedGreeting = (delay, callback) => setTimeout(callback, delay);

const myFilter = function (nums, callback) {
  arr = [];

  nums.forEach((element) => {
    if (callback(element)) arr.push(element);
  });

  return arr;
};

const debounce = function (callback, delay) {
  let isBusy = false;

  return function () {
    if (isBusy) return;

    callback.apply(this, arguments);

    isBusy = true;

    setTimeout(() => (isBusy = false), delay);
  };
};

const calculator = (function () {
  try {
    const expression = prompt("Введите математическое выражение:");
    if (!expression) {
      throw new Error("Вы ввели пустое выражение.");
    }

    const result = eval(expression);

    if (isNaN(result) || typeof result === "undefined" || result === null)
      throw new Error("Ошибка: результат не определен или равен NaN.");

    if (!isFinite(result))
      throw new Error("Ошибка: результат равен бесконечности.");

    console.log(`Результат: ${result}`);
  } catch (error) {
    console.error(`Ошибка: ${error.message}`);
  }
})((a, b, c) => console.log(a ** 2 + b ** 2 + c ** 2))(2, 3, 4);

((a, b) => console.log(a * b))(2, 3);

const generator = (n) => Array.from({ length: n }, (_, index) => index + 1);

const generatorOdd = (n) =>
  Array.from({ length: n }, (_, index) => index + 1).filter((x) => x % 2);

// Objects
const planets = {
  Mercury: { name: "Mercury", diameter: 4879, distance: 57.9 },
  Venus: { name: "Venus", diameter: 12104, distance: 108.2 },
  Earth: { name: "Earth", diameter: 12742, distance: 149.6 },
  Mars: { name: "Mars", diameter: 6779, distance: 227.9 },
  Jupiter: { name: "Jupiter", diameter: 139820, distance: 778.3 },
  Saturn: { name: "Saturn", diameter: 116460, distance: 1427.0 },
  Uranus: { name: "Uranus", diameter: 50724, distance: 2871.0 },
  Neptune: { name: "Neptune", diameter: 49244, distance: 4497.1 },
};

for (const planetName in planets) {
  if (planets.hasOwnProperty(planetName)) {
    const planet = planets[planetName];
    console.log(
      `Планета: ${planet.name}, Диаметр: ${planet.diameter} км, Расстояние: ${planet.distance} млн км`
    );
  }
}

const book = {
  title: "Капитал",
  author: "К.Маркс",
  year: 2020,
};

book.genre = "Фантастика";

book.year = 1867;

console.log(book);

const purchase = {
  title: "Товар",
  price: 1000,
  quantity: 2,
};

if (purchase.hasOwnProperty("discount")) {
  console.log("У этой покупки есть скидка.");
} else {
  console.log("У этой покупки нет скидки.");
}

function calculateTotal(product) {
  if (!product || typeof product !== "object") {
    return 0;
  }

  const { price, quantity } = product;
  if (typeof price !== "number" || typeof quantity !== "number") {
    return 0;
  }

  return price * quantity;
}

const product = {
  title: "Товар",
  price: 1000,
  quantity: 2,
};

const total = calculateTotal(product);
console.log(`Общая стоимость товара: ${total}`);

const calculateWebsiteStats = (stats, days) => {
  let totalGuests = 0;
  let totalViews = 0;

  for (const category in stats) {
    if (!stats.hasOwnProperty(category)) {
      return;
    }

    const categoryStats = stats[category];
    if (categoryStats && typeof categoryStats === "object") {
      totalGuests += categoryStats.guests;
      if (days && days > 0) {
        totalViews += categoryStats.views * days;
      } else {
        totalViews += categoryStats.views;
      }
    }
  }

  return { totalGuests, totalViews };
};

const websiteStats = {
  movies: {
    guests: 500,
    views: 200,
  },
  pictures: {
    guests: 200,
    views: 50,
  },
};

const periodDays = 3;
const totalWebsiteStat = calculateWebsiteStats(websiteStats, periodDays);
console.log(`Общее количество посетителей: ${totalWebsiteStat.totalGuests}`);
console.log(`Общее количество просмотров: ${totalWebsiteStat.totalViews}`);

const calculateSalesPercentage = (salesData) => {
  const totalSales = Object.values(salesData).reduce(
    (acc, region) => acc + region.sales,
    0
  );

  const percentageData = {};
  for (const region in salesData) {
    if (salesData.hasOwnProperty(region)) {
      const { name, sales } = salesData[region];
      percentageData[region] = { name, percentage: (sales / totalSales) * 100 };
    }
  }

  return percentageData;
};

const salesData = {
  region1: { name: "Регион 1", sales: 1000 },
  region2: { name: "Регион 2", sales: 1500 },
  region3: { name: "Регион 3", sales: 800 },
};

const percentageData = calculateSalesPercentage(salesData);
console.log(percentageData);

class TransactionError extends Error {
  constructor(message) {
    super(message);
    this.name = "TransactionError";
  }
}

class AccountLockedError extends Error {
  constructor(message) {
    super(message);
    this.name = "AccountLockedError";
  }
}

class Transaction {
  constructor(type, amount) {
    this.type = type; // "credit" (пополнение) или "debit" (списание)
    this.amount = amount;
    this.date = new Date();
  }
}

class Account {
  constructor(id) {
    this.id = id;
    this.balance = 0;
    this.transactions = [];
    this.isLocked = false;
  }

  performTransaction(type, amount) {
    if (this.isLocked) {
      throw new AccountLockedError("Account is locked.");
    }

    if (type !== "credit" && type !== "debit") {
      throw new TransactionError("Invalid transaction type.");
    }

    if (type === "debit" && this.balance < amount) {
      throw new TransactionError("Insufficient funds.");
    }

    const transaction = new Transaction(type, amount);
    this.transactions.push(transaction);

    if (type === "credit") {
      this.balance += amount;
    } else {
      this.balance -= amount;
    }
  }

  getTransactionHistory() {
    return this.transactions;
  }
}

class Client {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.accounts = [];
  }

  openAccount(accountId) {
    const account = new Account(accountId);
    this.accounts.push(account);
    return account;
  }
}

class Bank {
  constructor() {
    this.clients = [];
  }

  createClient(id, name) {
    const client = new Client(id, name);
    this.clients.push(client);
    return client;
  }

  findClient(id) {
    return this.clients.find((client) => client.id === id);
  }

  transferFunds(senderAccount, receiverAccount, amount) {
    if (senderAccount.isLocked || receiverAccount.isLocked) {
      throw new AccountLockedError("One or both accounts are locked.");
    }

    if (senderAccount.balance < amount) {
      throw new TransactionError("Insufficient funds.");
    }

    senderAccount.performTransaction("debit", amount);
    receiverAccount.performTransaction("credit", amount);
  }

  checkBalance(account) {
    return account.balance;
  }

  lockAccount(account) {
    account.isLocked = true;
  }

  unlockAccount(account) {
    account.isLocked = false;
  }
}

const bank = new Bank();

const client1 = bank.createClient(1, "Иван Иванов");
const account1 = client1.openAccount(101);

const client2 = bank.createClient(2, "Петр Петров");
const account2 = client2.openAccount(102);

account1.performTransaction("credit", 1000);

console.log("Баланс счета 101:", bank.checkBalance(account1));
console.log("Баланс счета 102:", bank.checkBalance(account2));

try {
  bank.transferFunds(account1, account2, 1500);
} catch (error) {
  if (
    error instanceof TransactionError ||
    error instanceof AccountLockedError
  ) {
    console.error("Ошибка при переводе:", error.message);
  } else {
    throw error;
  }
}

// Arrays
[1, 2, 3, 4, 5]
  .reverse()
  .filter((x) => x % 2 === 0)
  .concat([2, 4]);

const fruits = ["apple", "orange", "banana", "grape"];
if (fruits.includes("banana")) {
  alert("Содержит banana");
} else {
  alert("Не содержит banana");
}

const fromMatrixToArray = (arr) => [].concat(...arr);

const getUniqueNumbers = (arr1, arr2) => {
  const matchingValues = [];
  arr1.forEach((value) => {
    if (!arr2.includes(value)) {
      matchingValues.push(value);
    }
  });
  return matchingValues;
};

// Recurssion
const factorialRecursive = (n) => {
  if (n < 2) return n;
  return factorialRecursive(n - 1) * n;
};

const sumOfOdd = (max) => {
  if (max === 1) return 1;
  else if (max % 2 === 0) return sumOfOdd(max - 1);
  return sumOfOdd(max - 1) + n;
};

const fibonacci = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

const isPalindrome = (str) => {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
};

const flattenArray = (arr) => {
  let result = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      result = result.concat(flattenArray(el));
    } else {
      result.push(el);
    }
  });

  return result;
};

function findMax(arr, index = 0, max = -Infinity) {
  if (index === arr.length) {
    return max;
  } else {
    if (arr[index] > max) {
      max = arr[index];
    }
    return findMax(arr, index + 1, max);
  }
}

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);

  if (arr[middle] === target) {
    return middle;
  } else if (arr[middle] > target) {
    return binarySearch(arr, target, left, middle - 1);
  } else {
    return binarySearch(arr, target, middle + 1, right);
  }
}

// Math Date
let now = new Date();
console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);

const dateDiff = (str1, str2) => {
  const parts1 = str1.split(".");
  const parts2 = str2.split(".");

  const date1 = new Date(parts1[2], parts1[1] - 1, parts1[0]);
  const date2 = new Date(parts2[2], parts2[1] - 1, parts2[0]);

  return (date2 - date1) / (24 * 60 * 60 * 1000);
};

const getMinFromArray = (nums) => Math.min(...nums);

const dateReverse = (str) => {
  const parts = str.split(".");

  const date = new Date(parts[2], parts[1] - 1, parts[0]);

  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
};

const getRandomNumberBetween = (min, max) => Math.random() * (max - min) + min;

const getCircumference = (radius) => Math.PI * 2 * radius;

function checkEventOverlap(newStartDate, newEndDate, existingEvents) {
  newStartDate = new Date(newStartDate);
  newEndDate = new Date(newEndDate);

  for (const event of existingEvents) {
    const existingStartDate = new Date(event.startDate);
    const existingEndDate = new Date(event.endDate);

    if (newStartDate < existingEndDate && newEndDate > existingStartDate) {
      return true;
    }
  }

  return false;
}

const overlap = () => {
  const existingEvents = [
    {
      startDate: "2023-10-10T08:00:00",
      endDate: "2023-10-10T12:00:00",
    },
    {
      startDate: "2023-10-12T14:00:00",
      endDate: "2023-10-12T16:00:00",
    },
  ];

  const newEventStartDate = "2023-10-10T10:00:00";
  const newEventEndDate = "2023-10-10T11:30:00";

  const overlap = checkEventOverlap(
    newEventStartDate,
    newEventEndDate,
    existingEvents
  );
  console.log(overlap);
};

function getHumanReadableDateDifference(startDate, endDate) {
  const is_ValidDate = (dateStr) => !isNaN(new Date(dateStr).getTime());

  if (!is_ValidDate(startDate) || !is_ValidDate(endDate)) {
    throw new Error("Invalid date input");
  }

  startDate = new Date(startDate);
  endDate = new Date(endDate);

  const timeDifference = endDate - startDate;

  const isPast = timeDifference < 0;
  const prefix = isPast ? "over" : "in";

  const absTimeDifference = Math.abs(timeDifference);

  const units = [
    { value: 1000, unit: "second" },
    { value: 60, unit: "minute" },
    { value: 60, unit: "hour" },
    { value: 24, unit: "day" },
    { value: 30.44, unit: "month" },
    { value: 12, unit: "year" },
  ];

  for (const { value, unit } of units) {
    if (absTimeDifference < value) {
      const roundedValue = Math.floor(absTimeDifference / (value / 1000));
      return `${prefix} ${roundedValue} ${unit}${
        roundedValue === 1 ? "" : "s"
      } ${isPast ? "ago" : ""}`;
    }
    absTimeDifference /= value;
  }

  return "just now";
}

const humanDateRead = () => {
  const startDate = "2023-10-06T12:00:00";
  const endDate = new Date();

  const difference = getHumanReadableDateDifference(startDate, endDate);
  console.log(difference);
};

const getExponent = () => Math.E;

const floor = (x) => Math.floor(x);

const isValidDate = (dateStr) => {
  const regex = /^\d{2}.\d{2}.\d{4}$/;

  if (dateStr.match(regex) === null) {
    return false;
  }

  const [day, month, year] = dateStr.split(".");

  const formattedStr = `${year}-${month}-${day}`;

  const date = new Date(formattedStr);

  const timestamp = date.getTime();

  if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(formattedStr);
};

const addYearsToDate = () => {
  function parseDate(dateString) {
    const parts = dateString.split(".");
    if (parts.length !== 3) {
      throw new Error("Invalid date format. Please use 'day.month.year'.");
    }
    const [day, month, year] = parts.map(Number);
    return { day, month, year };
  }

  function formatDate({ day, month, year }) {
    return `${day}.${month}.${year}`;
  }

  function addYearsToDate(dateString, yearsToAdd) {
    const { day, month, year } = parseDate(dateString);
    const resultDate = new Date(year + yearsToAdd, month - 1, day);

    if (resultDate.getDate() !== day) {
      resultDate.setDate(0);
    }

    return formatDate({
      day: resultDate.getDate(),
      month: resultDate.getMonth() + 1,
      year: resultDate.getFullYear(),
    });
  }

  const initialDate = "6.10.2023";
  const yearsToAdd = 5;

  const newDate = addYearsToDate(initialDate, yearsToAdd);
  console.log(newDate);
};

const cosFromRad = (rd) => Math.cos(rd);

function calculateExpression(expression) {
  function calculateSubExpression(tokens) {
    const stack = [];
    const operators = [];

    for (const token of tokens) {
      if (typeof token === "number") {
        stack.push(token);
      } else if (token === "(") {
        operators.push(token);
      } else if (token === ")") {
        while (operators.length && operators[operators.length - 1] !== "(") {
          const operator = operators.pop();
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          stack.push(applyOperator(operand1, operand2, operator));
        }
        operators.pop();
      } else {
        while (
          operators.length &&
          precedence[operators[operators.length - 1]] >= precedence[token]
        ) {
          const operator = operators.pop();
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          stack.push(applyOperator(operand1, operand2, operator));
        }
        operators.push(token);
      }
    }

    while (operators.length) {
      const operator = operators.pop();
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      stack.push(applyOperator(operand1, operand2, operator));
    }

    return stack[0];
  }

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  function applyOperator(operand1, operand2, operator) {
    switch (operator) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        if (operand2 === 0) {
          throw new Error("Division by zero");
        }
        return operand1 / operand2;
    }
  }

  const tokens = [];
  let currentNumber = "";

  for (const char of expression) {
    if ("+-*/()".includes(char)) {
      if (currentNumber !== "") {
        tokens.push(parseFloat(currentNumber));
        currentNumber = "";
      }
      tokens.push(char);
    } else if ("0123456789.".includes(char)) {
      currentNumber += char;
    } else if (char !== " ") {
      throw new Error("Invalid character in expression: " + char);
    }
  }

  if (currentNumber !== "") {
    tokens.push(parseFloat(currentNumber));
  }

  return calculateSubExpression(tokens);
}

const calculatorWithMath = () => {
  const expression = "2 + 3 * 5 - 8 / 2";
  const result = calculateExpression(expression);
  console.log(result);
};

const idleWorders = () => {
  function calculateIdleTimeBetweenWorkdays(workday1, workday2) {
    const idleTime = workday2.start - workday1.end;
    return idleTime > 0 ? idleTime : 0;
  }

  function calculateTotalIdleTime(workdayTimes) {
    workdayTimes.sort((a, b) => a.start - b.start);

    let totalIdleTime = 0;

    for (let i = 1; i < workdayTimes.length; i++) {
      const idleTime = calculateIdleTimeBetweenWorkdays(
        workdayTimes[i - 1],
        workdayTimes[i]
      );
      totalIdleTime += idleTime;
    }

    return totalIdleTime;
  }

  const workdayTimes = [
    {
      start: new Date("2023-10-06T08:00:00"),
      end: new Date("2023-10-06T16:00:00"),
    },
    {
      start: new Date("2023-10-07T09:00:00"),
      end: new Date("2023-10-07T17:00:00"),
    },
    {
      start: new Date("2023-10-08T08:30:00"),
      end: new Date("2023-10-08T16:30:00"),
    },
  ];

  const totalIdleTime = calculateTotalIdleTime(workdayTimes);
  console.log(`Total Idle Time: ${totalIdleTime} milliseconds`);
};

// Async
const mapAsync = (arr, asyncCallback) => {
  const promices = [];

  arr.forEach((i) => promices.push(asyncCallback(i)));

  return Promise.all(promices);
};

const forEachAsync = async (arr, asyncCallback) => {
  for (const item in arr) {
    await asyncCallback(item);
  }
};

const getRandomBoolean = (delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const randomBollean = Math.random() < 0.5;
      resolve(randomBollean);
    }, delay);
  });

const parallel = (callbacks) =>
  Promise.all(callbacks.map((callback) => callback()));

const timeout = (asyncfunction, ms) => {
  const promise = asyncfunction();

  const timeoutPromise = new Promise((_, rejet) => {
    setTimeout(() => {
      rejet(
        new Error(
          `Timeout: Function didn't compleate within ${ms} milliseconds`
        )
      );
    }, ms);
  });

  return Promise.race([promise, timeoutPromise]);
};

function checkPrimeNumber(n) {
  return new Promise(async (resolve) => {
    if (n <= 1) {
      resolve(false);
    } else if (n <= 3) {
      resolve(true);
    } else if (n % 2 === 0 || n % 3 === 0) {
      resolve(false);
    } else {
      for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
          resolve(false);
        }
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
      resolve(true);
    }
  });
}

const publicSubscribe = () => {
  function EventEmitter() {
    const subscribers = {};

    this.subscribe = function (eventName, callback) {
      if (!subscribers[eventName]) {
        subscribers[eventName] = [];
      }
      subscribers[eventName].push(callback);
    };

    this.unsubscribe = function (eventName, callback) {
      if (subscribers[eventName]) {
        const index = subscribers[eventName].indexOf(callback);
        if (index !== -1) {
          subscribers[eventName].splice(index, 1);
        }
      }
    };

    this.publish = function (eventName, ...args) {
      if (subscribers[eventName]) {
        for (const callback of subscribers[eventName]) {
          callback(...args);
        }
      }
    };
  }

  const emitter = new EventEmitter();

  function subscriber1(message) {
    console.log(`Subscriber 1 received: ${message}`);
  }

  emitter.subscribe("event1", subscriber1);
  emitter.publish("event1", "Hello, World!");
  emitter.unsubscribe("event1", subscriber1);
  emitter.publish("event1", "This should not be received.");
};

const reduceAsync = (array, init, asyncCallback) =>
  array.reduce(async (acc, curr) => await asyncCallback(acc, curr), init);

const retry = async (asyncFunction, maxAttempts) => {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await asyncFunction();
      return result;
    } catch (err) {
      if (attempt === maxAttempts) throw err;

      console.log(`Attempt ${attempt} failed: ${err.message}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
};

const generateRandomArray = () => {
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async function generateRandomArray(length) {
    const randomArray = [];

    for (let i = 0; i < length; i++) {
      const randomNumber = generateRandomNumber(1, 100);
      randomArray.push(randomNumber);

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    return randomArray;
  }

  const arrayLength = 5;

  generateRandomArray(arrayLength)
    .then((randomArray) => {
      console.log(`Random Array: ${randomArray}`);
    })
    .catch((error) => {
      console.error(error);
    });
};

const checkAvailability = () => {
  function checkResourceAvailability(url) {
    return fetch(url, { method: "HEAD" })
      .then((response) => {
        if (response.ok) {
          return `${url} is available (Status ${response.status})`;
        } else {
          return `${url} is not available (Status ${response.status})`;
        }
      })
      .catch((error) => {
        return `${url} could not be checked (${error.message})`;
      });
  }

  const promises = resourceUrls.map(checkResourceAvailability);

  Promise.all(promises)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

const executeWithTimeout = (asyncOperation, ms) =>
  Promise.race([
    asyncOperation(),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout exceeded")), ms)
    ),
  ]);

const downloadImages = () => {
  const imageSources = ["https://example.com"];

  const downloadImage = (url) =>
    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `Failed to download: ${url} (Status ${response.status})`
          );
        return response.blob();
      })
      .then((blob) => URL.createObjectURL(blob))
      .catch((error) => error.message);

  const downloadPromises = imageSources.map((url) => downloadImage(url));
  Promise.allSettled(downloadPromises)
    .then((results) => {
      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          console.log(`Image ${index + 1} deownloaded successfully.`);
          console.log(`Blob URL: ${result.value}`);
        } else if (result.status === "rejected") {
          console.error(
            `Image ${index + 1} deowloaded failed ${result.reason}`
          );
        }
      });
    })
    .catch((error) => console.error(error));
};

// OOP
class Student {
  name;
  age;
  major;

  getInfo = () =>  `Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`;
}

class Shape {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName = () => this.#name;
}

class Rectangle extends Shape {
  #width;
  #height;

  constructor(name, width, height) {
    super(name);
    this.#height = height;
    this.#width = width;
  }

  getArea = () => this.#width * this.#height;

  getPerimetr = () => (this.#height + this.#width) * 2;

  c = () => { this.getName() }
}

const hasProperty = (obj, prop) => {
  if (obj.hasOwnProperty(prop)) return true;

  let currentObj = obj;
  while (currentObj.__proto__) {
    currentObj = currentObj.__proto__;
    if (currentObj.hasOwnProperty(prop)) return true;
  }

  return false;
}

const Human = {
  greet() {
    console.log("Hello!");
  }
}

const Person = Object.create(Human);
const person = Object.create(Person);
person.greet();

class Car {
  constructor(make, model, year) {
    this.make;
    this.model;
    this.year;
  }

  start() {
    console.log(`The ${this.model} ${this.make} (${this.year}) is starting`);
  }

  stop() {
    console.log(`The ${this.model} ${this.make} (${this.year}) is stopping`);
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);
myCar.start();
myCar.stop();

class MathUtils {
  static sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  static PI = 3.14159265359;
}

console.log(MathUtils.sum(1, 2, 3, 4)); 
console.log(MathUtils.PI); 

const Animal = {
  speak() {
    console.log("Animal sound");
  }
};

const Cat = Object.create(Animal);
Cat.sound = "Meow";

const myCat = Object.create(Cat);

myCat.speak();

class Hero {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }

  attack(target) {
    console.log(`${this.name} attacks ${target.name}`);
    target.takeDamage(this.attackPower);
  }

  takeDamage(damage) {
    console.log(`${this.name} takes ${damage} damage`);
    this.health -= damage;
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated`);
    }
  }
}

class Warrior extends Hero {
  constructor(name, health, attackPower) {
    super(name, health, attackPower);
    this.berserkMultiplier = 1.5; 
  }

  berserk() {
    console.log(`${this.name} goes berserk!`);
    this.attackPower *= this.berserkMultiplier;
  }
}

class Mage extends Hero {
  constructor(name, health, attackPower) {
    super(name, health, attackPower);
    this.fireballPower = 50;
  }

  fireball(target) {
    console.log(`${this.name} casts fireball at ${target.name}`);
    target.takeDamage(this.fireballPower);
  }
}

class Archer extends Hero {
  constructor(name, health, attackPower) {
    super(name, health, attackPower);
    this.multiShotCount = 3;
  }

  multiShot(target) {
    console.log(`${this.name} fires a multi-shot at ${target.name}`);
    for (let i = 0; i < this.multiShotCount; i++) {
      target.takeDamage(this.attackPower);
    }
  }
}

class Battle {
  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;
    this.turn = 1;
  }

  start() {
    console.log(`The battle begins between ${this.hero1.name} and ${this.hero2.name}`);
  }

  executeMove() {
    let currentHero = this.turn % 2 === 1 ? this.hero1 : this.hero2;
    let otherHero = this.turn % 2 === 1 ? this.hero2 : this.hero1;
    console.log(`Turn ${this.turn}: ${currentHero.name}'s move`);
    currentHero.attack(otherHero);
    this.turn++;
  }

  determineWinner() {
    if (this.hero1.health <= 0) {
      console.log(`${this.hero2.name} wins!`);
    } else if (this.hero2.health <= 0) {
      console.log(`${this.hero1.name} wins!`);
    } else {
      console.log("The battle is a draw");
    }
  }
}

const LoggerMixin = {
  log(...args) {
    console.log(`${this.constructor.name} - ${arguments.callee.name}: ${JSON.stringify(args)}`);
  },

  overrideMethod(methodName) {
    let originalMethod = this[methodName];
    this[methodName] = function(...args) {
      this.log(...args);
      return originalMethod.apply(this, args);
    }
  },

  addLogging() {
    let methodNames = Object.getOwnPropertyNames(this.constructor.prototype);
    for (let methodName of methodNames) {
      if (typeof this[methodName] === "function") {
        this.overrideMethod(methodName);
      }
    }
  }
}

Object.assign(Rectangle.prototype, LoggerMixin);
let o = new Rectangle("name", 12, 32);
o.getName();
o.getArea();
o.getPerimetr();

class AbstractShape {
  constructor() {
    if (this.constructor === AbstractShape) {
      throw new TypeError("Cannot construct abstract class.");
    }
  }

  getArea() {
    throw new Error("Method 'getArea()' must be implemented.");
  }

  getPerimeter() {
    throw new Error("Method 'getPerimeter()' must be implemented.");
  }
}

class Rectangle2 extends AbstractShape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends AbstractShape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Triangle extends AbstractShape {
  constructor(base, height, side1, side2, side3) {
    super();
    this.base = base;
    this.height = height;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}


String.prototype.toString = function() {
  return this.split('').reverse().join('');
}

function reverseString(str) {
  return str;
}

class Car {
  constructor() {
    this.engine = new Engine();
    this.body = new Body();
  }

  startEngine() {
    this.engine.start();
  }

  openBody() {
    this.body.open();
  }
}

class Engine {
  start() {
    console.log("Engine started");
  }
}

class Body {
  open() {
    console.log("Body opened");
  }
}

const cCar = new Car();
cCar.startEngine(); 
cCar.openBody(); 

class Creator {
  factoryMethod() {
    throw new Error("factoryMethod() должен быть переопределен");
  }
}
class CarCreator extends Creator {
  factoryMethod() {
    return new Car();
  }
}

class BicycleCreator extends Creator {
  factoryMethod() {
    return new Bicycle();
  }
}

class MotorcycleCreator extends Creator {
  factoryMethod() {
    return new Motorcycle();
  }
}

class Product {}

class Car extends Product {
  constructor() {
    super();
    console.log("Создан автомобиль");
  }
}

class Bicycle extends Product {
  constructor() {
    super();
    console.log("Создан велосипед");
  }
}

class Motorcycle extends Product {
  constructor() {
    super();
    console.log("Создан мотоцикл");
  }
}

const carCreator = new CarCreator();
const car = carCreator.factoryMethod(); 

const bicycleCreator = new BicycleCreator();
const bicycle = bicycleCreator.factoryMethod();

const motorcycleCreator = new MotorcycleCreator();
const motorcycle = motorcycleCreator.factoryMethod();

