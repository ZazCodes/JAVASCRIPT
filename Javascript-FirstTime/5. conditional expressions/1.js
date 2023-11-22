

// alert("zaz");

let a = prompt("your age?");
a = Number.parseInt(a); // converting strjng to number
// console.log(typeof a);
if(a<0){
    alert("invalid age");
}
else if(a> 18 && a<100){
    alert("you can drive");
}
else if(a> 100){
    alert("invalid age");
}
else{
    alert("you can't drive");
}

// switch case
let num = prompt("your age?");
num = Number.parseInt(num);

switch(num){
    case 12:
        console.log("you can drive");
        break;
    case 20:
        console.log("you can't drive");
        break;
    default:
        console.log("your choice");
}

// turnary operator
let life = prompt("your age");
let death = life > 18 ? "you are free" : "you are not free"
console.log(death)
