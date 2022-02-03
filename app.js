"use strict";
// // let userInput: unknown;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // let userName: string;
// // userInput = 5;
// // userInput = "Max";
// // if (typeof userInput === "string") {
// //   userName = userInput;
// // }
// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
//   // while (true) {}
// }
// // const result = generateError("An error occured", 500);
// // console.log(result);
// // const add = (a: number, b: number) => a + b;
// // const printOutput = (output: string | number) => console.log(output);
// const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking", ...hobbies];
// const person = {
//     firstName: "Max",
//     age: 30
// }
// // const copiedPerson = {
// //     ...person
// // };
// const add = (...numbers: number[]) => {
//   let result = 0;
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };
// const addedNumbers = add(5, 10, 2, 3.7);
// console.log(addedNumbers);
// const [hobby1, hobby2, ...remainingHobbies] = hobbies;
// const { firstName: userName, age } = person;
// console.log(userName, age);
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //   private name: string;
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var accounting = new Department("d1", "Accounting");
var it = new ITDepartment("i1", ["Max"]);
console.log(it);
// accounting.addEmployee("Max");
// accounting.addEmployee("John");
// accounting.describe();
// accounting.printEmployeeInformation();
it.describe();
