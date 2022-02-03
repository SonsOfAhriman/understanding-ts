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

class Department {
//   private name: string;
  protected employees: string[] = [];

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  constructor(private readonly id: string, private name: string) {
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, "IT");

    }
}

const accounting = new Department("d1", "Accounting");
const it = new ITDepartment("i1", ["Max"] );

console.log(it);

// accounting.addEmployee("Max");
// accounting.addEmployee("John");

// accounting.describe();
// accounting.printEmployeeInformation();
it.describe();