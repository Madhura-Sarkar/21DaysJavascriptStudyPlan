setTimeout(() => {
    console.log("Hello");
}, 3000);


setTimeout(greeting, 4000);
function greeting() {
    console.log("world");
}

setTimeout(greeting1, 5000, "Hi");
function greeting1(x){
    console.log(x);
}