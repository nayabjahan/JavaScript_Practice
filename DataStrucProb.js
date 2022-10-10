const prompt = require("prompt-sync")();
console.log("1. RandomMinMax, 2.PrimeFactors, 3.SameBdayMonth, 4.RepeatingNumbers");
let choice = parseInt(prompt("Enter The Choice : "))
switch (choice) {
    case 1:
        RandomMinMax();
        break;
    case 2:
       PrimeFactors() ;
        break;
        case 3:
            SameBirthDay();
            break
            case 4:
                RepeatingNumber();
            break;
}
             function RandomMinMax() {
                let count = 0;
                const number = [];
            
                while (count < 10) {
                    number[count] = Math.floor(Math.random() * 900 + 100);
                    count++;
                }
                console.log("Random numbers: " + number);
            
                let max = number[1];
                let min = number[1];
                let secondMax = number[1];
                let secondMin = number[1];
            
                for (i = 0; i < number.length - 1; i++) {
                    if (number[i] > max) {
                        max = number[i];
                    }
                    if (number[i] < min) {
                        min = number[i];
                    }
                }
                for (i = 0; i < number.length - 1; i++) {
                    if (number[i] > secondMax && number[i] < max) {
                        secondMax = number[i];
                    }
                    if (number[i] < secondMin && number[i] > min) {
                        secondMin = number[i];
                    }
                }
                console.log("Second Max is: " + secondMax);
                console.log("Second Min is: " + secondMin);
            }
           function PrimeFactors() {
                let count = 0;
                let numberIsPrime = 0;
                let result = [];
                let number = parseInt(prompt("Enter number to get its Prime Factors : "));
            
                for (i = 2; i <= number; i++) {
                    if (number % i == 0) {
                        numberIsPrime = 1;
                        for (j = 2; j <= i / 2; j++) {
                            if (i % j == 0) {
                                numberIsPrime = 0;
                                break;
                            }
                        }
                        if (numberIsPrime == 1) {
                            result[count] = i;
                            count++;
                        }
                    }
                }
                console.log(result);
            }
            function getMonthName(monthNumber) {
                const date = new Date();
                date.setMonth(monthNumber - 1);
                return date.toLocaleString('en-US', { month: 'long' });
            }
            
            function SameBirthDay() {
                let monthsMap = new Map([
                    [1, 0],
                    [2, 0],
                    [3, 0],
                    [4, 0],
                    [5, 0],
                    [6, 0],
                    [7, 0],
                    [8, 0],
                    [9, 0],
                    [10, 0],
                    [11, 0],
                    [12, 0]
                ]);
                for (let i = 1; i <= 50; i++) {
                    let randomMonth = Math.floor(Math.random() * 12 + 1);
                    let count = monthsMap.get(randomMonth);
                    monthsMap.set(randomMonth, count + 1);
                }
                monthsMap.forEach((values, keys) => {
                    console.log(values + " Person have BirthDay in the month of " + getMonthName(keys));
                })
            }
            
function RepeatingNumber() {
    let count = 0;
    const number = [];
    let start = parseInt(prompt("Starting Range : "));
    let end = parseInt(prompt("Ending Range : "));
    while (start <= end) {
        if (start % 11 == 0) {
            number[count] = start;
            count++;
        }
        start++;
    }
    console.log('Repeating numbers are: ' + number);
}

        
