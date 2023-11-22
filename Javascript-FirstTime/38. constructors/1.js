class form {

    constructor(givenName, train){
        console.log("constructor called" + givenName + " " + train)
        this.name = givenName;
        this.train = train;
    }

    submit(){
        alert(this.name + " form submitted " + this.train);
    }
    
    cancel(){
        alert(this.name + " form canelled " + this.train)  
    }
    
}

// create and fill form
let zazform = new form("zaz", 12222);
let broform = new form("bro", 11111);

zazform.submit()
broform.submit()
broform.cancel()