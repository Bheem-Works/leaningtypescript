"use strict";
/*
    Data type of the typescript :

    any - learned;
    unknown = learned;
    enum =  learned;
    never = learned;
    tuple = learned;
*/
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// any
// let anyVar: any = "Hello";
// anyVar = 5;
// anyVar = true;
// console.log(anyVar)
// // unknown
// let unknownVar: unknown = "Hello";
// if (typeof unknownVar === "string") {
//   console.log(unknownVar.toUpperCase());
// }
// // enum
// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// let c: Color = Color.Green;
// console.log(c);
// // never
// function error(message: string): never {
//   throw new Error(message);
// }
// console.log(error("This is an error message."));
// // tuple
// let tuple: [string, number] = ["hello", 10];
// console.log(tuple);
// // function
// const add = (a: number, b: number): number => {
//     return a + b;
// }
// console.log(add(1, 2));
// // array
// let arr: number[] = [1, 2, 3, 4, 5];
// console.log(arr);
// // object
// let obj: { name: string; age: number } = {
//     name: "John",
//     age: 30
// }
// console.log(obj);
// type Vim = {
//   name: string;
//   id: number;
//   isActive: boolean;
// };
// let sayHello: Vim = {
//   name: "vim",
//   id: 1,
//   isActive: true,
// };
// console.log(sayHello);
function greet(name) {
    if (name)
        return console.log(name);
    else
        console.log('hola');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map