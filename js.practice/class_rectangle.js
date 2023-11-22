//? Create a class called Rectangle with properties length and width. Add methods to the class for calculating the area and perimeter of the rectangle.

class Rectangle{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }
    CalculateArea(){
        let area = this.length * this.width;
        return area;
    }
    CalculatePerimeter(){
        let perimeter = 2*this.length + 2*this.width;
        return perimeter;
    }
}
let rec = new Rectangle(10, 10);
console.log(rec.CalculateArea());
console.log(rec.CalculatePerimeter());