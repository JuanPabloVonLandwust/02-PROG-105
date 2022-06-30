// 15-06-2022
let arr = ["JPvLG", "Jaime", "José"];

arr.push(2, 4, "Marcelo", 5);

console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(1, "2", "Tres");
console.log(arr)
arr.shift();
console.log(arr)

console.log(arr.indexOf("Jaime"));

if (arr.indexOf("Jaime"))
    console.log("Está en la lista");
else
    console.log("No está en la lista");

    if (arr.includes("JPvLG"))
    console.log("Está en la lista");
else
    console.log("No está en la lista");

for (let i = 0; i < arr.length; i++) {
    console.log(typeof(arr[i]));
    if (typeof(arr[i]) !== String)
        continue;
    console.log(arr[i]);
}

let a = 2;
let b = "2";
console.log(a == b);
console.log(a === b);

// 14-06-2022
// let a = 2;
// console.log(a)

// a = "3";
// console.log(a)

// const NAME = "JPvLG";
// console.log(NAME)

// // NAME = "Pepe";
// // console.log(NAME)

// let firstName = "Juan Pablo";
// let age = null;
// console.log(age)

// let b = 3
// console.log(a > b)
 
// a = a + 2
// console.log(a)

// a +=2
// console.log(a)

// function getName(param1) {
//     return param1 + NAME;
// }

// console.log(getName("Hello "))

// const getAge = function () {
//     return 30;
// };

// console.log(getAge())

// const getLastName = param2 => {
//     return param2 + "Gumucio";
// };

// console.log(getLastName("von Landwüst "));