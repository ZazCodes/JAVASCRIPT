class Zaz{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`user ${this.username} is logged in`);
    }
}

class Programmer extends Zaz{
    constructor(username, number, language){
        super(username);
        this.number = number;
        this.language = language;
    }
    Print(){
        console.log(`My ${this.number} fvt coding languge is ${this.language} `);
    }
}

let Make = new Programmer("zaz", 1, "C++");
Make.logMe();
Make.Print();

let Make2 = new Zaz("bro");
Make2.logMe();
// Make2.Print(); //cannot access properties of Programmer Class