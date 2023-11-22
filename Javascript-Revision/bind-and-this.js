function me(username){
    this.username = username;
    console.log("called");
}

function bro(username, rollno, hahaha){
    me.call(this, username);
    this.rollno = rollno;
    this.hahaha = hahaha;
}
let func2 =new bro("zaz", 18, "hahaha")
console.log(func2);