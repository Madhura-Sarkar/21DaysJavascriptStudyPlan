// creating object 
var user = {
    firstName: "Madhura",
    lastName: "Sarkar",
    age: 21,
    isAdult: true
};

console.log(user.firstName); // Output: Madhura
console.log(user.lastName); // Output: Sarkar
console.log(user["age"]); // Output: 21
console.log(user.isAdult); // Output: true

// nested object 
const student = {
    name: "Tina",
    rollNo: 18,
    marks: {
        math: 85,
        science: 95
    }
};

console.log(student.name); // Output: Tina
console.log(student.marks.math);
console.log(student["marks"]["science"]);