class Zaz{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    encryptPassword(){
        return `${this.username.toUpperCase()}`
    }
}
let bro = new Zaz("zaz", 12345);
console.log(bro.encryptPassword());


