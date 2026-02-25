// for of loop 
const names = ["YouTube", "Facebook", "Instagram", "Netflix"];

for (let n of names) {
    console.log(n);
}

// for in loop
const symbols = {
    yt: "YouTube",
    fb: "Facebook",
    ig: "Instagram",
}

for (const n1 in symbols) {
    console.log(n1);
    console.log(n1, symbols[n1]);
    console.log(`key is ${n1} and value is ${symbols[n1]}`);
}