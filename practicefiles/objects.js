// Create an object called person with properties name, age, and city.
var person ={
    name: "Madhura Sarkar",
    age: 21,
    city: "Kolkata",
};

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);





// Access the value of the name property and assign it to a variable called personName
var personName = person.name;
console.log(personName);





// Add a new property to the person object called occupation with a value of "student".
person.occupation = "student";
console.log(person);





// Add a new function property (also called a method) to the person object called printInfo that prints the following:
// ”Hi, I am {name}. I am {age} years old and I live in {city}.”
person.printInfo = function(){
    console.log(`Hi, I am ${this.name}. I am ${this.age} years old and I live in ${this.city}.`)
}

person.printInfo();