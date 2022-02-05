// // let userInput: unknown;

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

abstract class Department {
  //   private name: string;
  protected employees: string[] = [];
  static fiscalYear = 2022;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  constructor(protected readonly id: string, private name: string) {}

  abstract describe(this: Department): void;
}

class ITDepartment extends Department {
  private lastEmployee: string;

  get mostRecentEmployee() {
    if (this.lastEmployee) {
      return this.lastEmployee;
    }
    throw new Error("No employee found");
  }

  set mostRecentEmployee(value: string) {
    if (!value) {
      throw new Error("No employee found");
    }
    this.addEmployee(value);
  }

  describe() {
      console.log("IT Dept - ID: " + this.id);
  }

  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.lastEmployee = this.employees[0];
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
    this.lastEmployee = employee;
  }
}

// const accounting = new Department("d1", "Accounting");
const it = new ITDepartment("i1", ["Max"]);

const employee1 = Department.createEmployee("Sassi");
console.log(employee1);
// console.log(it.mostRecentEmployee);
it.addEmployee("Ryan");
console.log(it.mostRecentEmployee);

it.mostRecentEmployee = "Yon";
console.log(it.mostRecentEmployee);

console.log(employee1, Department.fiscalYear);

// accounting.addEmployee("Max");
// accounting.addEmployee("John");

// accounting.describe();
// accounting.printEmployeeInformation();
// it.describe();
it.describe();