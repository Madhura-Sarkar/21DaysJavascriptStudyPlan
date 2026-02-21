// String primitive 
const message = "Hello World";

// String object
const another = new String("Hello World!");

// string methods 
var stringOne = "Currently I am learning to code, "
var stringTwo = "Frontend and backend development"

//charAt()
console.log(stringOne.charAt(1));

//charCodeAt()
console.log(stringOne.charCodeAt(1));

//concat()
console.log(stringOne.concat(stringTwo));

//endWith()
console.log(stringOne.endsWith("code, "));

//fromCharCode()
console.log(String.fromCharCode(117));

//includes()
console.log(stringOne.includes("end"));

//indexOf()
console.log(stringTwo.indexOf("end"));

//lastIndexOf()
console.log(stringTwo.lastIndexOf("end"));

//match()
console.log(stringOne.match(/end/g));

//repeat()
console.log(stringOne.repeat(3));

//replace()
console.log(stringTwo.replace("end", "END"));

//search()
console.log(stringTwo.search("end"));

//slice()
console.log(stringTwo.slice(2, 4));

//split()
console.log(stringOne.split(" "));

//startsWith()
console.log(stringOne.startsWith("free"));

//substring()
console.log(stringTwo.substring(2, 4));

//toLowerCase()
console.log(stringOne.toLowerCase());

//toUpperCase()
console.log(stringOne.toUpperCase());

//trim()
var stringThree = "     Hello World!"
console.log(stringThree.trim());