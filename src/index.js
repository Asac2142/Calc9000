let calculatorScreen = document.querySelector('.calculator-screen');
let historyScreen = document.querySelector('.history-screen');

const addNumber = (number) => {    
    let input = [...calculatorScreen.value.trim()];
    let lastChar = input[input.length - 1];
    let regex = /\d/;
    
    if (lastChar) {
        if (lastChar.match(regex)) {
            calculatorScreen.value = input.join('');
            calculatorScreen.value += `${number}`
        } else if (verifyOperator(lastChar)) {
            calculatorScreen.value += ` ${number}`;    
        } else {
            calculatorScreen.value += `${number}`;    
        }
    } else {
        calculatorScreen.value += `${number}`;
    }
};

const addOperator = (operator) => {    
    let input = [...calculatorScreen.value];    
    let lastChar = input[input.length - 1];    

    if (verifyInputCharacter(lastChar)) {
        calculatorScreen.value += ` ${operator}`;
    }
};

const verifyOperator = (char) => {
    let result = false;

    if (char === '+' || char === '-' || char === '*' || char === '/') {
        result = true;
    }

    return result;
};

const verifyInputCharacter = (operator) => {
    let result = false;
    
    if (calculatorScreen.value) {
        if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/' && operator !== '.') {
            result = true;
        }
    }

    return result;
};

const clearScreen = () => {
    calculatorScreen.value = '';
};

const addPoint = () => {
    let input = [...calculatorScreen.value];  
    let lastChar = input[input.length - 1];
    let arr = calculatorScreen.value.split(' ');
    let lastCharTwo = arr[arr.length - 1];

    if (!lastCharTwo.includes('.')) {
        if (verifyInputCharacter(lastChar)) {        
            calculatorScreen.value  += '.';
        } 
    }
};

const deleteChar = () => {
    let input = [...calculatorScreen.value];
    input.splice(input.length - 1, 1);
    calculatorScreen.value = input.join('');
};

const getInput = () => {
    let input = calculatorScreen.value;
    let arr = input.split(' ');    
    let outputDisplayValue = arr;
    
    if (input) {
        arr = arr.filter(e => e !== ' ' || e !== '');    
        for (let i = 0; i < arr.length; i++) {             
            if (arr[i] === '*' || arr[i] === '/') {
                let calc = eval(`${arr[i - 1]} ${arr[i]} ${arr[i + 1]}`);            
                arr[i - 1] = calc;
                arr.splice(i, 2);
                i = 0;
            }
        }
        
        historyScreen.value += `${outputDisplayValue.join(' ')} = ${eval(arr.join('')).toFixed(2)} \n`;
        clearCalculatorScreen();
    }    
};

// const verifyDecimalNumbers = (numbers) => {

//     for (let i = 0; i < numbers.length)
// };

const clearCalculatorScreen = () => {
    calculatorScreen.value = '';
}