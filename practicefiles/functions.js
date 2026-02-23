// Write a function that takes two arguments, num1 and num2, and returns their sum.
function sum(num1, num2){
    return num1 + num2;
}

result = sum(5, 10);
console.log(result); // 15





// Write a function that takes a number as an argument and returns true if the number is even and false if it's odd.
function isEven(num){
    return num %2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false





// Write a function that takes an array of numbers as an argument and returns the sum of all the elements in the array.
function sumArray(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15