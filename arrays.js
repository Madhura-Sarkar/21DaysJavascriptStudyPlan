let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[1]);
console.log(selectedColors.length);

selectedColors[2] = "10";
console.log(selectedColors);
console.log(selectedColors.length);

console.log(" ")

// looping through array 
var cars = ['fiat', 'benz', 'honda', 'totoyota'];
for (let i = 0; i < cars.length; i++) {
    console.log(cars.length);
    console.log(i);
    console.log(cars[i]);
}

for (let i = 0; i < cars.length; i++) {
    if (cars[i] === "benz") {
        console.log("You are driving a sweet " + cars[i]);
    }
}