// Create a Shape class with properties color and name, and methods getArea() and getPerimeter() that logs to the console that they are not implemented.
class Shape {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
    getArea() {
        console.log("getArea() is not implemented");
    }

    getPerimeter() {
        console.log("getPerimeter() is not implemented");
    }
}


// Create a Rectangle class that extends Shape, with additional properties length and width, and overrides the getArea() and getPerimeter() methods to return the area and perimeter of the rectangle.
class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color, "Rectangle"); // calling parent constructor
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}

let rect1 = new Rectangle("Red", 10, 5);

console.log(rect1.getArea());       // 50
console.log(rect1.getPerimeter());  // 30


// Create a Circle class that extends Shape, with additional property radius, and overrides the getArea() and getPerimeter() methods to return the area and circumference of the circle.
class Circle extends Shape {
    constructor(color, radius) {
        super(color, "Circle"); // calling parent constructor
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

let circle1 = new Circle("Green", 7);

console.log(circle1.getArea());   
console.log(circle1.getPerimeter());  


// Create a class MathUtils with a static method called multiply that takes two numbers as arguments and returns their product. Use this method to multiply two numbers and log the result to the console.
class MathUtils {
    static multiply(a, b){
        return a * b;
    }
}

let result = MathUtils.multiply(5, 4);
console.log(result); //20


// Create a Person class with properties name, age, and gender, and a static method create(name, age, gender) that creates and returns a new Person instance with the specified properties.
class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    static create(name, age, gender){
        return new Person(name, age, gender);
    }
}

let person1 = Person.create("Tina", 21, "Female");
console.log(person1);