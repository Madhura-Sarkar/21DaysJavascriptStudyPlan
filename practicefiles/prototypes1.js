// Create a constructor function called Vehicle that takes a parameter brand and assigns it to the object. Add a prototype method called start() that logs "Vehicle started" to the console. Then create an instance called myVehicle with the brand "Toyota". Log the brand of the vehicle to the console and call the start() method.
function Vehicle(brand){
    this.brand = brand;
}

Vehicle.prototype.start = function(){
    console.log("Vehicle started");
}

const myVehicle = new Vehicle("Toyota");
console.log(myVehicle.brand);
myVehicle.start();



// Modify the Vehicle constructor function to also include a property called wheels. Create a new instance called car1 with the brand "Honda" and 4 wheels. Log both the brand and wheels properties to the console.
Vehicle.prototype.wheels = 4;
const myVehicle1 = new Vehicle("Honda");
console.log(myVehicle1.wheels);



// Create a new constructor function called Car that inherits from Vehicle. Use Vehicle.call(this, brand) to inherit the brand property. Add an additional property called model to the Car constructor. Override the start() method in Car so that it logs "Car started" instead of the Vehicle version. Create an instance called myCar and log its brand and model, then call the start() method.
function Car(brand, model){
    Vehicle.call(this, brand);
    this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.constructor = Car;

Car.prototype.start = function() {
    console.log("Car started");
};

const myCar = new Car("BMW", "old");

console.log(myCar.brand);
console.log(myCar.model);
myCar.start();



// Add a static method called info() to the Vehicle constructor function that logs "This is a vehicle". Also add a static method info() to the Car constructor function that logs "This is a car". Call the info() method from both Vehicle and Car.
Vehicle.info = function(){
    console.log("This is a vehicle");
}

Car.info = function(){
    console.log("This is a car");
}

Vehicle.info();
Car.info();