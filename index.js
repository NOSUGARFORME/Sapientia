// Logical expressions
const inputNumber = +prompt("Введите число:");
if (inputNumber % 2 === 0) alert("Число четное");

const textInput = prompt("Введите язык программирования, на котором Вы работаете:");
const backendLanguages = ["python", "java", "c++"];
const fronedLanguages = ["javascript", "js"];
if (backendLanguages.includes(textInput.toLowerCase())) {
    alert("Вы backedер!");
} else if (fronedLanguages.includes(textInput.toLowerCase())) {
    alert("Вы frontendер!");
} else {
    alert("Я не знаю кто Вы");
}

textInput = prompt("Enter the language you are currently speaking:").toLowerCase();
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

if(textInput === "russian") alert("Привет")
else if (textInput === "english") alert("Hello")
else if (textInput === "italian") alert("Ciao")
else if (textInput === "spanish") alert("Hola")
else if (textInput === "french") alert("Salut")
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
}

klava();

const err = () => {
    try {
        textInput = +prompt("Enter any text");
    } catch (error) {
        throw new CustomError("проброс ошибки");
    } finally {
        alert("it's a conclusion either way")
    }
}

try {
    err();
}
catch (error) {
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
while(i < 10) {
    console.log(i)
    i += 2;
}

for(i = 0; i < 10; i += 2) {
    console.log(i);
}

const drawPyramid = (lines) => {
  for (let i = 1; i <= lines; i++) {
    let spaces = ' '.repeat(lines - i);
    let hashes = '#'.repeat(2 * i - 1);
    console.log(spaces + hashes);
  }
}
  
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
}

const factorial = (n) => {
    let res = 1, i;
    for (i = 2; i <= n; i++)
        res *= i;
    return res;
}

const factorialRange = (n) => {
    for (let i = 1; i < n; i++) {
        console.log(factorial(i));
    }
}

const fib = (n) => {
    const sqrt5 = Math.sqrt(5);
    const gr = (1 + sqrt5) / 2;
    return Math.round((1 / sqrt5) * (Math.pow(gr, n) - Math.pow(1 - gr, n)));
}

const fibRange = (m) => {
    for (let n = 1; n < m; n++) {
        console.log(fib(n));
    }
}

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
      const hashs = '#'.repeat(2 * i - 1);
      const stars = '*'.repeat((2 * pyramidHeight - 1 - hashs.length) / 2 + 1);
      console.log(stars + hashs + stars);
    }

    for (let i = pyramidHeight - 1; i >= 1; i--) {
      const hashs = '#'.repeat(2 * i - 1);
      const stars = '*'.repeat((2 * pyramidHeight - 1 - hashs.length) / 2 + 1);
      console.log(stars + hashs + stars);
    }
  
}

const linesInput = prompt("Введите нечетное число от 1 до 9");
lines = parseInt(linesInput);

if (lines % 2 === 0 || lines < 1 || lines > 9) {
  console.log('Вы ввели некорректное значение');
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

const applydiscount = (price, percentage) => price - price * percentage / 100;

const delayedGreeting = (delay, callback) => setTimeout(callback, delay);

const myFilter = function (nums, callback)  {
    arr = [];
    
    nums.forEach(element => {
        if (callback(element)) arr.push(element);
    });

    return arr;
}

const debounce = function (callback, delay) {

    let isBusy = false;
  
    return function() {
      if (isBusy) return;
  
      callback.apply(this, arguments);
  
      isBusy = true;
  
      setTimeout(() => isBusy = false, delay);
    };
  }

const calculator = function () {
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
    } 
    catch (error) {
        console.error(`Ошибка: ${error.message}`);
    }
}

((a, b, c) => console.log(a ** 2 + b ** 2 + c ** 2))(2, 3, 4);

((a, b) => console.log(a * b))(2, 3);

const generator = (n) => Array.from({length: n}, (_, index) => index + 1);

const generatorOdd = (n) => Array.from({length: n}, (_, index) => index + 1).filter(x => x % 2);
