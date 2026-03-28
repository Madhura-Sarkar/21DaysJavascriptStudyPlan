// Create a function that returns a promise. The promise should resolve after 5 seconds with the value "Hello World!". Use the setTimeout function to delay the resolution of the promise. 
function helloPromise(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Hello World!")
        }, 5000);
    });
}

helloPromise().then((message) => {
    console.log(message);
})





// Create a function that returns a promise. The promise should reject immediately with the error message "Something went wrong!".
function promiseEx2() {
    return new Promise((resolve, reject) => {
        reject("Something went wrong!");
    });
}

// Using it
promiseEx2()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));





// Create a function that takes a number as an argument and returns a promise.The promise should resolve to the square of the number after a random delay between 1 and 3 seconds.Use async / await to call this function with a few different numbers and log the results to the console.
function squareWithDelay(num) {
    return new Promise((resolve, reject) => {
        // random delay between 1–3 seconds
        const delay = Math.floor(Math.random() * 2000) + 1000;

        setTimeout(() => {
            resolve(num * num);
        }, delay);
    });
}
async function runSquares() {
    try {
        const result1 = await squareWithDelay(2);
        console.log("Square of 2:", result1);

        const result2 = await squareWithDelay(3);
        console.log("Square of 3:", result2);

        const result3 = await squareWithDelay(4);
        console.log("Square of 4:", result3);
    } catch (error) {
        console.log("Error:", error);
    }
}

runSquares();