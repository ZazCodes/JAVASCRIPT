let calculator = {};

// let user1 = parseInt(prompt("Enter num 1 : ", 0));
// let user2 = parseInt(prompt("Enter num 2 : ", 0));
let user1 = 5;
let user2 = 2;

calculator.read = function(user1, user2){
    this.num1 = user1; 
    this.num2 = user2;
}

calculator.sum = function(){
    return this.num1 + this.num2;
}

calculator.mult = function(){
    return this.num1 * this.num2;
}

calculator.read(user1, user2);
console.log(`Sum is : ${calculator.sum()}`);
console.log(`Product is : ${calculator.mult()}`);