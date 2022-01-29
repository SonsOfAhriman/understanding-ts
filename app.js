"use strict";
// let userInput: unknown;
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let userName: string;
// userInput = 5;
// userInput = "Max";
// if (typeof userInput === "string") {
//   userName = userInput;
// }
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
// const result = generateError("An error occured", 500);
// console.log(result);
// const add = (a: number, b: number) => a + b;
// const printOutput = (output: string | number) => console.log(output);
var hobbies = ["Sports", "Cooking"];
var activeHobbies = __spreadArray(["Hiking"], hobbies, true);
var person = {
    firstName: "Max",
    age: 30
};
// const copiedPerson = {
//     ...person
// };
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
var userName = person.firstName, age = person.age;
console.log(userName, age);
