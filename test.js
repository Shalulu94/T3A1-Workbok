let name = "Sam"; // This is a string

let age = 30; // this is an integer
let price = 5.99; // this is a Floating-point number 

let value = null; // this variable has been set to null which is no value

let isadmin = true; // this is a boolean. true or false



let car = {
    model: "Tesla"
    year: 2023

};


let numbers = [1, 2, 3]; // this is an array of numbers
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

let numbers = [1, 2, 3]; // this is an array of numbers
let lastelement = numbers.pop(); // This removes the last element in an array
console.log(lastelement); // Output 3
console.log(numbers); // Output: [1, 2]

let fruits = ["mango", "orange", "melon"]; 
fruits.splice(1, 1, "banana") // removes element at index one and adds banana
console.log(fruits) // output ["mango", "banana", "melon"]

let numbers = [1, 4, 3, 2]; // this is an array of numbers
numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 4]


let mix = [1, "mixed", true] // this is a mixed array with different data types


function greet() {
    return "hello";
}

