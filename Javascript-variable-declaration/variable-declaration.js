
// I used let because fullName is reassigned later.
// const would cause an error since const variables cannot be reassigned.
let fullName = "John Doe";
fullName = "Jane Doe";
console.log(fullName);

// I used const for age because its value never changes.
// // const is more appropriate for fixed values.
//Using let would work, but it suggests the value might change when it doesn't.
const age = 30; if (age > 18) {

// I used let for adult because it is block-scoped and represents a temporary state.
// Using const would still work here, but let is better for variables that may vary by condition.
let adult = true; console.log(adult); }

//I used const for loopArray because the array reference never changes.
// Only the contents change, which is allowed with const.
// Using let would work, but const communicates that the variable name should not be reassigned.
const loopArray = []; for (let i = 0; i < 5; i++) {

// I used let for i because its value changes on each loop iteration.
// const would cause an error because i must be updated.
loopArray.push(i); } console.log(loopArray);

// I used let for MAXIMUM because the value is reassigned.
// const would cause an error since const variables cannot be reassigned.
let MAXIMUM = 100; MAXIMUM = 200;

// I used let for colors because the entire array is replaced with a new array.
// const would cause an error because you cannot reassign a const variable.
// (You can modify a const array's contents, but not replace the whole array.)
let colors = ["Red", "Green", "Blue"];
colors = ["Yellow", "Pink", "Purple"];
console.log(colors);






