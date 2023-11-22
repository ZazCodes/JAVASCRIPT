//? You're tasked with creating a simple banking system using JavaScript. Define a class called Account that has the following properties:

//? accountNumber (a unique identifier for each account)
//? owner (the name of the account owner)
//? balance (the current balance in the account)
//? Additionally, create methods for the Account class:

//? deposit(amount) which adds the specified amount to the balance.
//? withdraw(amount) which subtracts the specified amount from the balance.
//? Now, create two instances of the Account class with different account numbers and owners. Demonstrate how you would deposit and withdraw money from these accounts.


class Bank{
    constructor(accountNumber, owner, balance){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
        console.log(`Account number is : ${accountNumber}`);
        console.log(`Owner of this account is : ${owner}`);
        console.log(`Total Balance is : ${balance}`);
    }
    
    deposit(amount){
        console.log(`Deposit amount is ${amount}`);
        this.balance += amount;
        return this.balance;
    }

    withDraw(amount){
        console.log(`Withdraw amount is ${amount}`);
        this.balance -= amount;
        return this.balance
    }
}


let obj1 = new Bank(16101, "Zaz", 5000);
console.log(`Total balance after deposit amount is : ${obj1.deposit(500)}`);
console.log(`Total balance after withdraw amount is ${obj1.withDraw(1000)}`);

let obj2 = new Bank(16102, "Bro", 2000);
console.log(`Total balance after deposit amount is : ${obj2.deposit(200)}`);
console.log(`Total balance after withdraw amount is ${obj2.withDraw(100)}`);
