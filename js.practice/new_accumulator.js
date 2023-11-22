function Accumulator(StartingValue){
    this.value = function(){
        return StartingValue + this.a;
    }
    this.read = function(){
        this.a = 5;
    }
};

let accumulator = new Accumulator(10);

accumulator.read();
console.log(`Solution is : ${accumulator.value()}`);