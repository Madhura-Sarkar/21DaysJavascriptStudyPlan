class Animal {
    constructor(){
        this.alive = true;
    }
    eat(){
        console.log("this animal is eating");
    }
}

class Rabbit extends Animal{}
class Fish extends Animal{
    swim(){
        console.log("this fish is swimming")
    }
}

let rabbit = new Rabbit();
let fish = new Fish();
console.log(rabbit.alive);
rabbit.eat();
fish.swim();