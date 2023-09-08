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