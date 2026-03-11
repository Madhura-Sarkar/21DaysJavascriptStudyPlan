// Write a program to create a Symbol and print it to the console.
// Create a Symbol
const mySymbol = Symbol("mySymbol");

// Print it
console.log(mySymbol);


// Write a program that uses the **`Symbol.iterator`** method to create a custom iterable object.
const myIterable = {
  start: 1,
  end: 5,

  [Symbol.iterator]() {
    let current = this.start;
    let end = this.end;

    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// Using for...of loop
for (let num of myIterable) {
  console.log(num);
}

// Write a program that creates an array with multiple Symbols and uses the **`Symbol.for`** method to retrieve them.
// Create symbols using Symbol.for
const sym1 = Symbol.for("apple");
const sym2 = Symbol.for("banana");
const sym3 = Symbol.for("mango");

// Store them in an array
const symbolArray = [sym1, sym2, sym3];

// Retrieve symbols again using Symbol.for
const retrieved1 = Symbol.for("apple");
const retrieved2 = Symbol.for("banana");
const retrieved3 = Symbol.for("mango");

// Print comparison
console.log(symbolArray[0] === retrieved1); // true
console.log(symbolArray[1] === retrieved2); // true
console.log(symbolArray[2] === retrieved3); // true