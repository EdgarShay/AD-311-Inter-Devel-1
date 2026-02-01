// -----------------------------
// Task 1: Function Argument Expansion
// -----------------------------

function sum(a, b, c) {
    return a + b + c;
}

const numbers = [5, 10, 15];

// Using spread syntax to pass array elements as arguments
console.log("Task 1 Result:", sum(...numbers));

// -----------------------------
// Task 2: Merging Arrays
// -----------------------------

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Merge using spread syntax
const mergedArray = [...array1, ...array2];

console.log("Task 2 Result:", mergedArray);

// -----------------------------
// Task 3: Array Element Insertion
// -----------------------------

const colors = ["red", "green", "blue"];

// Insert elements at beginning and end using spread
const extendedColors = ["yellow", ...colors, "purple"];

console.log("Task 3 Result:", extendedColors);
// -----------------------------
// Task 4: Cloning and Modifying an Object
// -----------------------------

const person = {
    name: "John",
    age: 30
};

// Clone using spread syntax
const newPerson = {
    ...person,
    name: "Jane", // modify name
    gender: "female" // add new property
};

console.log("Task 4 Original Person:", person);
console.log("Task 4 New Person:", newPerson);

// -----------------------------
// Task 5: Combining Objects
// -----------------------------
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

// Combine objects (object2 overwrites object1 where keys match)
const combinedObject = {
    ...object1,
    ...object2
};
    
console.log("Task 5 Result:", combinedObject);