var myMaps = new Map();
myMaps.set(1, "Uno");
myMaps.set(2, "Dos");
myMaps.set(3, "Tres");
myMaps.set(4, "Cuatro");
console.log(myMaps);

for(let [key, value] of myMaps){
    console.log(`Key is ${key} and Value is ${value}`);
}