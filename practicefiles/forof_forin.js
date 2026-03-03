// Write a for...of loop to iterate over the elements of an array and check if any of them are null. 
const names = ["Youtube", "Instagram", null, "Facebook", "Netflix"];
for (const n of names) {
    if (n === null) {
        console.log(true);
    }
}

// if there were multiple null values, it would print true multiple times.
// method 2
let hasNull = false;
for (const n of names) {
    if (n === null) {
        hasNull = true;
        break;
    }
}
console.log(hasNull);





// Write a for...of loop to iterate over the characters of a string and log their values to the console.
const text = "Hello";

for (const char of text) {
    console.log(char);
}





// Write a for...in loop to iterate over the properties of an object and log their values to the console.
const symbols = {
    yt: "Youtube",
    fb: "Facebook",
    ig: "Instagram"
}
for(const value in symbols){
    console.log(symbols[value]);
}