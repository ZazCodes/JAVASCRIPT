class employee {
    constructor(name){
        this.n = name
        console.log(`${this.n} - employee constructor is here`)   
    }
    login(){
        console.log(`employee is logged in`)
    }

    logout(){
        console.log(`employee is logged out`)
    }

    requestLeaves(leave){
        console.log(`emplyee has requested ${leave} leaves - auto approved `)
    }
}

class Programmer extends employee{
    constructor(name){
        super(name)
        console.log(`${this.n} - programmer constructor is here. newly written`)   
    }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leave){
        super.requestLeaves(4)
        console.log(`one extra `)
    }
}

let e = new Programmer("Zaz")
e.login()
e.logout()
e.requestLeaves(3)