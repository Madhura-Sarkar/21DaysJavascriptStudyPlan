setInterval(() => {
    console.log("Hello");
}, 3000);

let counter = 0;
setInterval (counter, 5000);
function count(){
    console.log(counter++);
}