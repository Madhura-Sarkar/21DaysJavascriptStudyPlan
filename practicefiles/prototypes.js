// Create a constructor function Animal with a property name and a method speak() that logs "Animal sound" to the console. Create a new instance of Animal called myAnimal and log its name property to the console.

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log("Meawo");
};

const myAnimal = new Animal("cat");

console.log(myAnimal.name);
myAnimal.speak();



// Add a property legs to the Animal constructor function. Create a new instance of Animal called myAnimal2 and log its legs property to the console.
Animal.prototype.legs = 2;

const myAnimal2 = new Animal("kangaroo");
console.log(`${myAnimal2.name} have ${myAnimal2.legs} legs`);



// Create a new constructor function Dog that inherits from Animal using Dog.prototype = Object.create(Animal.prototype). Add a property breed to Dog and override the speak() method to log "Bark". Create a new instance of Dog called myDog and log its breed and name properties to the console, and call its speak() method.
function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    console.log("Bark");
};

const myDog = new Dog("Popo", "Husky");

console.log(myDog.name);
console.log(myDog.breed);
myDog.speak();



// Add a walk() method to the Animal constructor function that logs "Animal is walking". Add a walk() method to the Dog constructor function that logs "Dog is walking". Create a new instance of Dog called myDog2 and call its walk() method.
Dog.prototype.walk = function() {
    console.log("Dog is walking");
};

const myDog2 = new Dog("Tommy", "Beagle");
myDog2.walk();



// Add a static method info() to the Animal constructor function that logs "This is an animal". Add a static method info() to the Dog constructor function that logs "This is a dog". Call the info() method of both Animal and Dog.
Animal.info = function(){
    console.log("this is an animal");
}
Dog.info = function(){
    console.log("This is a dog");
}

Animal.info();
Dog.info();