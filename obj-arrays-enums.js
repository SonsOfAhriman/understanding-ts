"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   // const person = {
//   name: "Ryan",
//   age: 36,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Ryan",
    age: 36,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, 'admin']
let favoriteActivities;
favoriteActivities = ["Sports", 5, null];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log(Role.ADMIN);
}
