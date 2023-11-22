//? Write a JavaScript program that takes a string and reverses it. For example, if the input is "hello", the program should output "olleh".

let str = "hello";
let newStr = "";

for (let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
}
console.log(newStr);