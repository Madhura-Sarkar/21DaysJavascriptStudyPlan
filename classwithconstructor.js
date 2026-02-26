// creating class with constructor 
class Car {

    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive() {
        console.log("let's drive the car");
    }
    brake() {
        console.log("you step on the brakes");
    }
}

let car1 = new Car("Ford", "Mustang", 2020, "red");
let car2 = new Car("Chevrolet", "Camaro", 2021, "blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car1);
console.log(car2);
car1.drive();
car2.brake();
console.log(car1.make);
console.log(car2.year);
