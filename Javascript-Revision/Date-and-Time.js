let date = new Date();
console.log(date);

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());

console.log(date.getMonth() + 1);     // cz starts from 0
console.log(date.getDate());         // starts from 1

let mahkey = new Date("2003-04-30"); // 2003-04-30 not 30-04-2003
console.log(mahkey.toDateString());
console.log(mahkey.getMonth() + 1);
console.log(mahkey.getDate() + 1);
console.log(mahkey.getFullYear());