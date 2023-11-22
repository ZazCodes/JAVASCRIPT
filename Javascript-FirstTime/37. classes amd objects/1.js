class form {
    submit(){
        alert(this.name + " form submitted " + this.train);
    }
    cancel(){
        alert(this.name + " form canelled " + this.train)  
    }
    
    fill(givenName, train){
        this.name = givenName;
        this.train = train;
    }

}

// create form
let zazform = new form();

// fill form
zazform.fill("zaz", 22222)

let broform = new form();
broform.fill("bro", 1222)

zazform.submit()

broform.submit()

broform.cancel()