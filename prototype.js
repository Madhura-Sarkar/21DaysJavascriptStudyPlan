const food = {
    init: function(type){
        this.type = type
    },
    eat: function(){
        console.log('you ate the' + this.type)
    }
}

const waffle = Object.create(food)
const carrot = Object.create(food)

food.eat = function(){
    console.log('YOU DEFINIATLY ATE ' + this.type.toUpperCase())
}

waffle.init('waffle');
waffle.eat();
carrot.init('carrot');
carrot.eat();