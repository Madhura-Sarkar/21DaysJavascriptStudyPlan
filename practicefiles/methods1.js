// Create an object called calculator with methods add, subtract, multiply, and divide. Each method should take two parameters and return the result of the corresponding mathematical operation.
var calculator = {
    add: function(a, b){
        return a + b;
    },
    subtract: function(c, d){
        return c - d;
    },
    multiply: function(e, f){
        return e * f;
    },
    divide: function(g, h){
        return g / h;
    }
}

console.log(calculator.add(5, 3));       
console.log(calculator.subtract(5, 3));  
console.log(calculator.multiply(5, 3));  
console.log(calculator.divide(5, 3));    