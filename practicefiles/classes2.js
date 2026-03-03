// Create a class called Car with properties make, model, and year, and a method called drive that logs a message to the console indicating that the car is being driven.
// Create an instance of this class.

class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    drive(){
        console.log(`${this.make}, ${this.model} is being driven`);
    }
}

let car1 = new Car("Ford", "Mustang", 2022);
console.log(car1);
car1.drive();