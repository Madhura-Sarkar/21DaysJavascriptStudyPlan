//boolean data type
var data = true;
if(data)
    {
        console.log("Booleans rules!");
} else{
    cosole.log("Booleans are lame!");
}

//null data type
var n = null;
console.log(n);

//ndefined data type
var a;
console.log(a);

//number data type
var n1 = 3.6;
var n2 = 6.4;
console.log(n1 + n2);

//String Data Type
var name = "Tina";
console.log("Hi, my name is " + name);

//symbol data type
var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2); 
console.log(String(sym1) === String(sym2));

//object data type
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
console.log(myCar.make + " " + myCar.model);


//BigInt data type
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992