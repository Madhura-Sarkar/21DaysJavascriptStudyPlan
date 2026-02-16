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

// example1
let x = 1;
{
  let x = 2;
  {
    let x = 3;
    console.log(x);
  }
  console.log(x);
}
console.log(x);

// exmple2
// let X = 1;
// {
//   console.log(X);
//   let X = 2;
//   {
//     console.log(X);
//     let X = 3;
//     console.log(X);
//   }
//   console.log(X);
// }
// console.log(X);

// example3
console.log(y) // ReferenceError: Cannot access 'y' before initialization
{
	var y = 2
	{
		console.log(y)
		let y = 5
	}
	console.log(y)
}