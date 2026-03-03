class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    welcome(){
        console.log(`hello! ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, gpa){
        super(name,age);
        this.gpa = gpa;
    }
    hello(){
        super.welcome();
        console.log(`you are ${this.age} years old`)
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name,age);
        this.subject = subject;
    }
}

let student1 = new Student("Madhura", 21, 8.5);
let student2 = new Student("Sayak", 27, 8.5);
let teacher = new Student("Rohan", 27, "Python");

console.log(student1);
console.log(teacher);
student2.hello();