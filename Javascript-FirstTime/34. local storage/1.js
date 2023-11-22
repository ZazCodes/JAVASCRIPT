let key = prompt("enter key");
let value = prompt("enter value");

localStorage.setItem(key,value);

console.log(`the value at ${key} is ${localStorage.getItem(key)}`);