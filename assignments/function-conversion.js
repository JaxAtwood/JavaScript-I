// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

//Challenge 1
let myFunction = () => {
}
console.log("Function was invoked!");

//Challenge 2
let anotherFunction = (param) => {
  return param;
}
anotherFunction();
console.log(anotherFunction("Example"));

//Challenge 3
let add = (param1, param2) => {
  return param1 + param2;
};
add();
console.log(add(1,2));

//Challenge 4
let subtract = (param1, param2) => {
  return param1 - param2;
};
subtract();
console.log(subtract(1,2));

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);