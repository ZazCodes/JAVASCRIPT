class animal {

    constructor(name){
        this.name = animal.capitalize(name)
    }

    walk(){
        console.log(`${this.name} is walking`)
    }

    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }

}

let a = new animal("dogie");
a.walk();