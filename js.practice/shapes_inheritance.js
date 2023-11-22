class Shape{
    constructor(type){
        this.type = type;
    }
    area(){
        return 0;
    }
}

class Circle extends Shape{
    constructor(radius){
        super("Circle");
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape{
    constructor(length, width){
        super("Rectangle");
        this.length = length;
        this.width = width;
    }
    area(){
        return this.length * this.width;
    }
}

let obj1 = new Circle(5)
console.log(`Circle area is : ${obj1.area()}`);

let obj2 = new Rectangle(5, 10)
console.log(`Rectangle area is : ${obj2.area()}`);