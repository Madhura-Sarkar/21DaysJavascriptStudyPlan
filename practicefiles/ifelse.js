// Write an if statement that prints whether a given number is positive or negative.
let number = -5;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
}





// Write an if/else statement that checks whether a given variable is null or undefined.
let myVariable;
if (myVariable === null) {
    console.log("The variable is null.");
} else if (myVariable === undefined) {
    console.log("The variable is undefined.");
}





// Write an if/else statement that checks whether a given number is between 10 and 20.
let num =  15;
if (num > 10 && num < 20){
    console.log("The number is between 10 and 20.");
}





// Write an if/else statement that checks whether a given number is a multiple of 3.
let numberToCheck = 9;
if (numberToCheck % 3 === 0) {
    console.log("The number is a multiple of 3.");
} else {
    console.log("The number is not a multiple of 3.");
}





// What will be logged to the console and why?
let x = "hello";
if (x) {
  console.log("x is truthy");
} else {
  console.log("x is falsy");
}
// The console will log "x is truthy" because in JavaScript, non-empty strings are considered truthy values.