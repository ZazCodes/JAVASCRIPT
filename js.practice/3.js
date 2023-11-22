// Write a function called reverseString that takes a string as input and returns the string reversed. Use loops and variables to accomplish this.


let reverse = "";
function ReversesString(value){
    for(let  i = value.length - 1; i >= 0; i--){
        reverse += value[i];
    }
    return reverse;
}
console.log(`reversed : ${ReversesString("computer")}`);
