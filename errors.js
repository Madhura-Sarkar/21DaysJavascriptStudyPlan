// syntax error 
function test() {
    console.log("Hello World"
}

// runtime error 
function test() {
    console.log(x);
}

// logical error
function test() {
    let a = 5;
    let b = 10;
    let c = a - b; // should be a + b
    console.log(c);
}