// Create an object called shoppingCart with properties items and total, and methods addItem and removeItem. The addItem method should add an item to the items array and update the total property accordingly. The removeItem method should remove an item from the items array and update the total property accordingly.
var shoppingCart = {
    items: [],
    properties: 0,

    addItem: function (name, price) {
        this.items.push({
            name: name,
            price: price
        });
        this.total = this.total + price;
    },

    removeItem: function (name) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].name === name) {
                this.total = this.total - this.items[i].price;
                this.items.splice(i, 1);
                break;
            }
        }
    }
};

shoppingCart.addItem("Shirt", 500);
shoppingCart.addItem("Shoes", 1000);

console.log(shoppingCart.items);
console.log(shoppingCart.total); // 1500

shoppingCart.removeItem("Shirt");

console.log(shoppingCart.items);
console.log(shoppingCart.total); // 1000