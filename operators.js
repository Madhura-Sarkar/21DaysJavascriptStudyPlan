// MATHEMATICAL OPERATORS
let a1 = 10;
let b1 = 5;
console.log("Addition:", a1 + b1);
console.log("Subtraction:", a1 - b1);
console.log("Multiplication:", a1 * b1);
console.log("Division:", a1 / b1);
console.log("Modulus:", a1 % b1);
console.log("Exponentiation:", a1 ** b1);





// ASSIGNMENT OPERATORS
// Basic Assignment
let a = 10;
console.log("Initial value of a:", a);

// Addition Assignment
a += 5;   // a = a + 5
console.log("After += 5:", a);

// Subtraction Assignment
a -= 3;   // a = a - 3
console.log("After -= 3:", a);

// Multiplication Assignment
a *= 2;   // a = a * 2
console.log("After *= 2:", a);

// Division Assignment
a /= 4;   // a = a / 4
console.log("After /= 4:", a);

// Modulus Assignment
a %= 6;   // a = a % 6
console.log("After %= 6:", a);

// Exponentiation Assignment
a **= 2;  // a = a ** 2
console.log("After **= 2:", a);

// Increment
a++;  
console.log("After ++:", a);

// Decrement
a--;
console.log("After --:", a);





// COMPARISON OPERATORS 
let x = 10;
let y = 5;
let z = "10";

console.log("x =", x);
console.log("y =", y);
console.log("z =", z);

// Equal to (loose equality - checks value only)
console.log("x == z :", x == z);   // true

// Strict equal to (checks value + type)
console.log("x === z :", x === z); // false

// Not equal (loose)
console.log("x != z :", x != z);   // false

// Strict not equal
console.log("x !== z :", x !== z); // true

// Greater than
console.log("x > y :", x > y);     // true

// Less than
console.log("x < y :", x < y);     // false

// Greater than or equal to
console.log("x >= 10 :", x >= 10); // true

// Less than or equal to
console.log("y <= 5 :", y <= 5);   // true






// BITWISE OPERATORS
let m = 5;   // 0101 (binary)
let n = 3;   // 0011 (binary)

console.log("m =", m); 
console.log("n =", n);

// Bitwise AND (&)
console.log("m & n :", m & n);  
// 0101 & 0011 = 0001 → 1

// Bitwise OR (|)
console.log("m | n :", m | n);  
// 0101 | 0011 = 0111 → 7

// Bitwise XOR (^)
console.log("m ^ n :", m ^ n);  
// 0101 ^ 0011 = 0110 → 6

// Bitwise NOT (~)
console.log("~m :", ~m);  
// ~5 → -6 (inverts all bits)

// Left Shift (<<)
console.log("m << 1 :", m << 1);  
// 0101 << 1 = 1010 → 10

// Right Shift (>>)
console.log("m >> 1 :", m >> 1);  
// 0101 >> 1 = 0010 → 2

// Unsigned Right Shift (>>>)
console.log("m >>> 1 :", m >>> 1);  
// same as >> for positive numbers → 2





//LOGICAL OPERATORS
let o = true;
let p = false;

console.log("o =", o);
console.log("p =", p);

// Logical AND (&&)
// True only if both are true
console.log("o && p :", o && p);   // false

// Logical OR (||)
// True if at least one is true
console.log("o || p :", o || p);   // true

// Logical NOT (!)
// Reverses the value
console.log("!o :", !o);   // false
console.log("!p :", !p);   // true


// Using logical operators with numbers
let num1 = 10;
let num2 = 5;

console.log("num1 > 5 && num2 < 10 :", num1 > 5 && num2 < 10); // true
console.log("num1 < 5 || num2 < 10 :", num1 < 5 || num2 < 10); // true
console.log("!(num1 > num2) :", !(num1 > num2)); // false





//TERNARY AND UNARY OPERATORS
let j = 10;
let k = 5;

console.log("j =", j);
console.log("k =", k);


// 🔹 TERNARY OPERATOR (? :)
let result = (j > k) ? "j is greater" : "k is greater or equal";
console.log("Ternary Result:", result);


// 🔹 UNARY OPERATORS

// Unary Plus (+) → convert string to number
k = "20";
k = +k;   // convert to number
console.log("Unary + (string to number) k:", k);

// Unary Minus (-)
console.log("Unary -j :", -j);

// Increment (++)
j++;
console.log("After j++ :", j);

// Decrement (--)
k--;
console.log("After k-- :", k);

// Logical NOT (!)
console.log("!true :", !true);
