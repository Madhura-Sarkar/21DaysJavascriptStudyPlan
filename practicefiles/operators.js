// Create a variable num and assign it the value 10. Add 5 to num and store the result in num. Subtract 2 from num and store the result in num. Multiply num by 3 and store the result in num. Divide num by 2 and store the result in num. Log the value of num to the console.
let num = 10;
num = num + 5;
num = num * 3;
num = num / 2;
console.log(num);





// Create a variable str1 and assign it the value "Hello". Create another variable str2 and assign it the value "World!". Concatenate str1 and str2 and store the result in a variable str3. Log the value of str3 to the console.
let str1 = "Hello";
let str2 = "World!";
let str3 = str1 + " " + str2;
console.log(str3);





// Create a variable bool1 and assign it the value true. Create another variable bool2 and assign it the value false. Log the value of the expression bool1 && bool2 to the console. Log the value of the expression bool1 || bool2 to the console. Log the value of the expression !bool1 to the console.

let bool1 = true;
let bool2 = false;
console.log(bool1 && bool2);
console.log(bool1 || bool2);
console.log(!bool1);





/*
Predict the output of the following expressions:

1. **`true && (false || true)`**
2. **`(true && false) || (false || true)`**
3. **`(true || false) && !(true && false)`**
4. **`!(true && false) || (false && true)`**
5. **`true && !false || false && !true`**
6. **`!(true || false) && !(false && true)`**
*/
let t = true;
let f = false;
console.log(t && (f || t));
console.log((t && f) || (f || t));
console.log((t || f) && !(t && f));
console.log(!(t && f) || (f && t));
console.log(t && !f || f && !t);
console.log(!(t || f) && !(f && t));





// Write an expression that checks whether a given number is even.
let n1 = 4;
let isEven = n1 % 2 === 0;
console.log(n1 + " is even: " + isEven);





// Declare two number variables and assign them some numerical value. Write an expression that compares these two numbers and returns true if they are equal.
let a = 5;
let b = 5;
let areEqual = a === b;
console.log("Are " + a + " and " + b + " equal? " + areEqual);





// Predict the output of the following:
let foo = null;
let bar = foo ?? "default";
console.log(bar);
//op: default






// Predict the output of the following:
let foo1 = undefined;
let bar1 = foo1 ?? "default";
console.log(bar1);
//op: default