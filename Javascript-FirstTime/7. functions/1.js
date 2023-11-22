
// one method
function life(x, y) {
    return (a+b)/2;
}
let a = 5;
let b = 15;
console.log("average of a and b is ", life(a,b));

// arrow function
const dead = (p,q) =>{
    return p+q;
} 
console.log("sum is = ", dead(a,b));

// without return
const alive = () =>{
    console.log("fucked up life");
}
alive();

// other method
const live = () =>{
    console.log("hello bro");
    return "hi";
}
let v = live();
console.log(v);