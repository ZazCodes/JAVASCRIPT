class animal {
    constructor(name, color){
        this.n = name;
        this.c = color;
    }

     run(){
        console.log(`${this.n} isn running`)
     }

     shout(){
        console.log(`${this.n} is barking`)
     }
}

class monkey extends animal{
    lata(){
        console.log(`${this.n} is lataying`)
    }
}

let a = new animal("dog", "brown")
let m = new monkey("Pink-Monkey", "White")

a.run()
a.shout()
m.lata()
// a.lata() ..... not works