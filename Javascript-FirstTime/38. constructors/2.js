class form {
    constructor(name, number, address){
        this.n = name;
        this.m = number;
        this.a = address;
        console.log("constructor called . . .")
    }

    priview(){
        alert(`${this.n} : Your form is submitted for train number ${this.m} and address ${this.a}`)
    }

    submit(){
        alert(`${this.n} form submitted for ${this.m}`)
    }

    cancel(){
        alert(`${this.n} form cancelled for ${this.m}`)
        this.m = 0;
    }
}

let myform = new form("Zaz", 420, "Mars")

myform.priview()
myform.submit()
myform.cancel()
myform.priview()