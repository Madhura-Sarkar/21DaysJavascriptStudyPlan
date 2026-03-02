// Create an object called bankAccount with properties balance and transactions, and methods deposit and withdraw. The deposit method should add the specified amount to the balance and add a new transaction to the transactions property with the type "deposit" and the amount. The withdraw method should subtract the specified amount from the balance and add a new transaction to the transactions property with the type "withdrawal" and the amount.
var bankAccount = {
    balance: 0,
    transactions: [],

    deposit: function(amount) {
        this.balance = this.balance + amount;

        this.transactions.push({
            type: "deposit",
            amount: amount
        });
    },

    withdraw: function(amount) {
        if (amount > this.balance) {
            console.log("Not enough balance");
            return;
        }

        this.balance = this.balance - amount;

        this.transactions.push({
            type: "withdrawal",
            amount: amount
        });
    }
};

// Using the object
bankAccount.deposit(500);
bankAccount.withdraw(200);

console.log(bankAccount.balance);      // 300
console.log(bankAccount.transactions);