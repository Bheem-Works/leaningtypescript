"use strict";
/*
    Data type of the typescript :

    any - learned;
    unknown = learned;
    enum =  learned;
    never = learned;
    tuple = learned;
*/
Object.defineProperty(exports, "__esModule", { value: true });
// any
let anyVar = "Hello";
anyVar = 5;
anyVar = true;
console.log(anyVar);
// unknown
let unknownVar = "Hello";
if (typeof unknownVar === "string") {
    console.log(unknownVar.toUpperCase());
}
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
// never
function error(message) {
    throw new Error(message);
}
console.log(error("This is an error message."));
// tuple
let tuple = ["hello", 10];
console.log(tuple);
// function
const add = (a, b) => {
    return a + b;
};
console.log(add(1, 2));
// array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// object
let obj = {
    name: "John",
    age: 30
};
console.log(obj);
let sayHello = {
    name: "vim",
    id: 1,
    isActive: true,
};
console.log(sayHello);
//# sourceMappingURL=index.js.map