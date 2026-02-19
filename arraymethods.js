const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

// Filter method
const filteredItems = items.filter((item) => {
    return item.price <= 100
})
// console.log(items);
console.log(filteredItems);





// Map method
const itemNames = items.map((item) => {
    return item.name
    // return item.price
})
console.log(itemNames);





// Find method
const foundItem = items.find((item) => {
    return item.name === 'Book'
})
console.log(foundItem);





// ForEach method
items.forEach((item) => {
    // console.log(item.name);
    console.log(item.price);
})





// Some method
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})
console.log(hasInexpensiveItems);





// Every method
const hasExpensiveItems = items.every((item) => {
    return item.price <= 1000
})
console.log(hasExpensiveItems);





// Reduce method
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(total);





// Includes method
const numbers = [1, 2, 3, 4, 5]
const includesTwo = numbers.includes(2)
console.log(includesTwo);





// sort(), reverse(), toSorted(), toReversed() methods
const months = ['Jan', 'Feb', 'Mar', 'Apr']
months.sort()
console.log(months);

const sortedMonths = months.toSorted()
console.log(sortedMonths);

months.reverse()
console.log(months);

const reversedMonths = months.toReversed()
console.log(reversedMonths);