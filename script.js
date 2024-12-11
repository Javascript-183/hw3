// task 1
function numberSquare(number) {
    number = Number(number);
    square = number * number;
    return square;
}

//task 2
function celcToFaren(celcTemperature) {
    FarenTemperature = (celcTemperature * 1.8) + 32;
    return `${celcTemperature}°C is ${FarenTemperature}°F`;
}

//task 3
function rangeCheck(number, startNum, lastNum) {
    if (number >= startNum && number <= lastNum) {
        return `number ${number} is between ${startNum} and ${lastNum}`;
    }
    else {
        return `number ${number} is NOT between ${startNum} and ${lastNum}`;
    }
}

// task 4
function isLeapYear(year) {
    if (year % 400 === 0) {
        return `${year} is leap year`;
    } else if (year % 100 === 0) {
        return `${year} is NOT leap year`;
    } else if (year % 4 === 0) {
        return `${year} is leap year`;
    } else {
        return `${year} is NOT leap year`;
    }
}

//task 5
function calculator() {
    let number1 = prompt("enter the first number:");
    if (isNaN(number1) === true) {
        return "incorrect format. try again";
    } else {
        let action = prompt("enter action:");
        let number2 = prompt("enter the second number:");
        if (isNaN(number2) === true) {
            return "incorrect format. try again";
        } else {
            number1 = Number(number1);
            number2 = Number(number2);
            let result;

            if (action === "+") {
                result = number1 + number2;
            }else if(action === "-"){
                result = number1 - number2;
            }else if(action === "*"){
                result = number1 * number2;
            }else if(action === "/"){
                result = number1 / number2;
            }else{
                result = "incorrect operator please choose either + - * or /"
            }

            return result;
        }
    }
}
