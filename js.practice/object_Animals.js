class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    makeSound(){
        return "Animals Sounds";
    }
}

class Lion extends Animal{
    constructor(name, age, sound){
        super(name, age);
        this.sound = sound;
    }
    makeSound(){
        return this.sound;
    }
}

class Elephant extends Animal{
    constructor(name, age, sound){
        super(name, age);
        this.sound = sound;
    }
    makeSound(){
        return this.sound;
    }
}

let obj1 = new Lion("ok", 10, "hahaha");
console.log(`Lion sound is : ${obj1.makeSound()}`);

let obj2 = new Elephant("now", 20, "dadada");
console.log(`Elephant sound is : ${obj2.makeSound()}`);
console.log(`Elephant age is : ${obj2.age}`);