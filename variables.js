//1st way to declare variables
var a = 10;
var A = 20;
var sum = a + A;
console.log(sum);

//2nd way to decalre variables
var a, A, sum;
a = 10;
A = 20;
sum = a + A;
console.log(sum);

// 3rd way to declare varibales 
var a = 10, A = 20, sum = a + A;
console.log(sum);

//constants
//2. Defined constants
const pi = 3.14159;
let r = 5;
let circumference;
/* 
let r;
let circumference;
r = window.prompt("enter the radius of a circle");
r = Number(r);
this will not executed as it is for console of a page not for a direct run 
*/
circumference = 2 * pi * r;
console.log(circumference);

// contsants have two types 
//1. literal constants
let R = 5;
let area = 3.14 * R * R;
console.log(area);

