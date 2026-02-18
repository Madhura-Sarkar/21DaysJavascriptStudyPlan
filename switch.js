let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log("Today is " + day);



// exmaple 2
var Animal = "Giraffe";
switch (Animal) {
    case 'Cow':
    case 'Giraffe':
    case 'Dog':
    case 'Pig':
        console.log("This animal will go on Tina's Ark.");
        break;
        case 'spoon':
        console.log("Spoons are not animals.");
        break;
        case 'Dinosaur':
            default:
                console.log("This animal will not be on Tina's Ark.");
}