function passGenerator(n){
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopmnbvcxzasdfghjkl-_1234567890";
    let pass = "";
    
    for ( i = 0; i < n; i++){
        let selecting =  Math.floor(Math.random() * str.length);
        pass += str[selecting];
    }
    return pass;
}

let passLength = 12;
let print = passGenerator(passLength);

console.log(`password is ${print}`);