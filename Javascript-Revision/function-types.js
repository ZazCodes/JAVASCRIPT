//! Function Types

//? Function Declaration
console.log(`function one : ${One(5)}`); // valid in function declaration
function One(num){
    return num + 1;
}

//? Function Expression
// console.log(`function one : ${Two(10)}`); // not valid in function expression
let Two = function(num){
    return num + 1;
}
console.log(`function one : ${Two(10)}`);

//? Arrow Function
let Arrow = (a, b) => {
    return a + b;
}
console.log(Arrow(3, 5));

//? Immediately Invoked Functions
(function okbro(){
    console.log("hello");
})()

//OR

( (name) => {
    console.log(name);
})("zaz");