//? Create an object representing a car. It should have properties like make, model, year, and color. Then, write a function that takes this object as a parameter and prints out a sentence describing the car.

// ? For example, if the object represents a red Toyota Corolla from 2020, the function should print something like "This is a red Toyota Corolla from 2020."

function printCarInfo(obj) {
    console.log(`this is a ${obj.model} ${obj.make} of ${obj.color} color made in ${obj.year}`);
  }
  
  const obj = {
    make: "Mercedes",
    model: "Benz-G",
    year: 2023,
    color: "black",
  };
  
  printCarInfo(obj);


//! By class

class Car{
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    print(){
        console.log(`this is a ${this.model} ${this.make} of ${this.color} color made in ${this.year}`);
    }
}

let myCar = new Car("Mercedes","Benz-G", 2023, "black" );
console.log(myCar.print());