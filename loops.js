for(let i = 0; i<5; i++){
    console.log(i);
}

console.log(" ");

let j = 0;
while(j<5){
    j++;
    console.log(j);
}

console.log(" ");

let k = 0;
do{
    k++;
    console.log(k);
}while(k<5)

console.log(" ");

// Breal & Continue 
for (let n = 0; n<=20; n++){
    if(n===13){
        break;
    }
    console.log(n);
}

console.log(" ");

for (let m = 0; m<=20; m++){
    if(m===13){
        continue;
    }
    console.log(m);
}