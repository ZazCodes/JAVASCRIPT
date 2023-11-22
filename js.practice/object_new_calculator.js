function Calculator(){

    this.read = function(){
        this.a = 10;
        this.b = 5;
    }

    this.sum = function(){
        return this.a + this.b;
    }

    this.mult = function(){
        return this.a * this.b;
    }
}

let calculator = new Calculator();

calculator.read();
console.log(`Sum is : ${calculator.sum()}`);
console.log(`Product is : ${calculator.mult()}`);