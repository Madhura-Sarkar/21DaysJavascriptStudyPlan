// Template Literals are a modern way to write strings in JavaScript 
// They allow for easier string interpolation and multi-line strings

// let text = "Hello, 
//     World!"
//error 

let text1 = `Hello,
    World!`
    console.log(text1);
    // works fine





    // variable insertion 
    // this is the most important feature of template literals
    let myName = "Madhura";
    console.log(`Hello, ${myName}!`);

    //${} is used to insert variables or expressions into the string

    // even calculations
    let a = 5;
    let b = 10;
    console.log(`The sum is ${a + b}.`);





    //HTML templates
    let product = "Laptop";
    let price = 50000;
    let card = `
    <div>
        <h2>${product}</h2>
        <p>Price: $${price}</p>
    </div>
    `;
    console.log(card);

    // useful for creating dynamic HTML content in JavaScript applications, DOM manipulation, especially when working with frameworks like React or Vue.js.