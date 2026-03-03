// Create a class called Person with properties name and age, and a method called introduce that logs the person's name and age to the console.
// Create and instance of this class.
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`Hello!, ${this.name}, you've successfully logged in, you are ${this.age} years old`)
    }
}

let person1 = new Person("Madhura", 21); //insances
let person2 = new Person("Rohan", 27); //insances

console.log(person1);
console.log(person2);
person1.introduce();
person2.introduce();