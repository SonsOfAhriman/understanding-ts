"use strict";
function add(n1, n2, showResult, phrase) {
    //   if (typeof n1 !== "number" || n2 !== "number") {
    //     throw new Error("Can't do that");
    //   }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
let number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
const result = add(number1, number2, printResult, resultPhrase);