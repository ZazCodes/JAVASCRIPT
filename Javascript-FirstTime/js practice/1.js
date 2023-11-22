//Write a function called add7 that takes one number and returns that number + 7.
function add7 (num){
    return num+7
}
let a = add7(3);
console.log(a)

//Write a function called multiply that takes 2 numbers and returns their product.
function multiply(one, two){
    return one*two;
}
let b = multiply(5,6)
console.log(b);

//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(name){
    let modify = name.charAt(0).toUpperCase() + name.slice(1);
    return modify;
}
let c = capitalize('zaz');
console.log(c)

// Write a function called lastLetter that takes a string and returns the very last letter of that string: lastLetter("abcd") should return "d"
function lastLetter(bro){
    let mode = bro.slice(-1)
    return mode;
}
let d = lastLetter('code')
console.log(d)





















