class Car{
    static numbersOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numbersOfCars += 1;
    }

    static beginRace(){
        console.log("The race has begun!")
    }
}

let car1 = new Car ("Mustang");
let car2 = new Car ("BMW");
console.log(Car.numbersOfCars);
Car.beginRace();
// car1.beginRace(); // error