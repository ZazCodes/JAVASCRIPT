class animal {
    constructor(name){
        this._name = name;          // here we can write this.name
    }

    fly(){
        console.log("bro here")
    }

    get name(){
        return this._name;
    }

    set name(newname){
        this._name = newname;
    }

}

let a = new animal("bruno");
a.fly();
console.log(a.name);
a.name = "jack";
console.log(a.name);

var c; 
console.log(a instanceof animal)
console.log(c instanceof animal)

