function doMath(num){
    num = Number(num);
    if (num){
        var NewNumber = (num +100)/3;
        return NewNumber;
    } else {
        return false;
    }
}

var customNum = doMath(343);
console.log(customNum);
var customNum = doMath("Tina");
console.log(customNum);