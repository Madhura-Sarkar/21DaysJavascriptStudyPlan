function outer() {
  let x = 10;
  function inner(y) {
    return x + y;
  }
  return inner;
}

let add = outer();
console.log(add(5)); 



function counter() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  return increment;
}

let add1 = counter();
add1(); // Output:1
add1(); // Output:2
add1(); // Output:3




function multiplier(x) {
  function inner(y) {
    return x * y;
  }
  return inner;
}

let double = multiplier(2);
let triple = multiplier(3);
console.log(double(5)); // Output:10
console.log(triple(5)); // Output:15