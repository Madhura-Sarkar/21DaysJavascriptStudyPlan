const COLOR_RED = Symbol('Red');
const COLOR_BLUE = Symbol('Blue');
const COLOR_GREEN = Symbol('Green');

function getComplement(color){
    switch(color){
        case COLOR_RED:
            return COLOR_BLUE;
        case COLOR_BLUE:
            return COLOR_GREEN;
        case COLOR_GREEN:
            return COLOR_RED;
        default:
            throw new Error('Unknown Color: ' + color);
    }
}

console.log(getComplement(COLOR_RED)); 
console.log(getComplement(COLOR_BLUE)); 
console.log(getComplement(COLOR_GREEN)); 