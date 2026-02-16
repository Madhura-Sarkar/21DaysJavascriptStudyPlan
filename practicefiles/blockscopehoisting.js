// blocks
{
    let a = 5;
    console.log(a);
}

let a = 10;
console.log(a);

// good practice of hositing
let A = 20; //the variable A is hoisted to the top of the scope, but its value is not assigned until the line where it is declared. Therefore, if you try to access A before its declaration, you will get a ReferenceError.
{
    let A = 5;
    console.log(A);
}