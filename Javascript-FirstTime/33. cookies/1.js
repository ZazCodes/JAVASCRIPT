
// document.cookie = "zaz1=bro2022020"
// document.cookie = "zaz2=broekeke2022020"

// console.log(document.cookie)

let a = prompt("enter key")
let b = prompt("enter value")

document.cookie = `${encodeURIComponent(a)}=${encodeURIComponent(b)}`;
console.log(document.cookie)