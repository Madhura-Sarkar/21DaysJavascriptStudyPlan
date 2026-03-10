/* Create a Map object called **`phoneBook`** that maps people's names to their phone numbers. Add the following entries:

- Alice: 123-456-7890
- Bob: 234-567-8901
- Carol: 345-678-9012
- Dan: 456-789-0123
*/

var phoneBook = new Map();
phoneBook.set("Alice", "123-456-7890");
phoneBook.set("Bob", "234-567-8901");
phoneBook.set("Carol", "345-678-9012");
phoneBook.set("Dan", "456-789-0123");
console.log(phoneBook);



// Use the has() method of the phonebook Map to check if the phonebook contains an entry for "Eve". Log the result to the console.
console.log(phoneBook.has("Eve"));


// Use the get() method of the phonebook Map to get the phone number for "Bob". Log the result to the console.
console.log(phoneBook.get("Bob"));


// Use a for...of loop to log all of the entries in the phonebook Map to the console in the format "Name: phone number".
for (let [name, number] of phoneBook) {
    console.log(`${name}: ${number}`);
}


// Write a function that takes a string as input and returns the count of unique characters in the string.
function countUniqueChars(str) {
    const unique = new Set(str);
    return unique.size;
}

console.log(countUniqueChars("hello"));



// Write a function that takes two arrays as input and returns a new array containing only the elements that are common to both arrays, but with no duplicates.
function commonElements(arr1, arr2) {
    const set2 = new Set(arr2);
    const result = new Set();

    for (let item of arr1) {
        if (set2.has(item)) {
            result.add(item);
        }
    }

    return [...result];
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));



// Create a BigInt a with a value of 9007199254740991 and add 1 to it. What is the result? Why did this happen?
let a = 9007199254740991n;
console.log(a + 1n);


// Create a variable x with a value of 123456789012345678901234567890. Convert it to a BigInt and store it in a variable y. Check the type of y.
let x = 123456789012345678901234567890;
let y = BigInt(x);

console.log(typeof y);



// Create a BigInt b with a value of 123456789012345678901234567890. Convert it to a string using toString() and then back to a BigInt using BigInt(). Check if the value of the new BigInt is the same as the original b.
let b = 123456789012345678901234567890n;

let str = b.toString();
let newBigInt = BigInt(str);

console.log(newBigInt === b);