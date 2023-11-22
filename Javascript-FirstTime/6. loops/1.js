// 
//simple
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// // add sum simple for loop
// let sum = 0;
// let a = prompt("give a number");
// a = Number.parseInt(a);
// for(let i = 0; i <= a; i++){
//     sum += i;
// }
// console.log("sum of " + a + " numbers is " + sum);


// for in loop
const animal = {
    name : "dog",
    leg : 4,
}
for (const key in animal) {
    console.log(key, animal[key]);
}

let names = ["zaz", "me", "am"];
for(let index in names){
    console.log(index, names[index]);
}

// for of loop
for (let name of names){
    console.log(name);
}

// // while loop
// let n = prompt("enter number");
// let i = 0;
// while(i < n){
//     console.log(i);
//     i++;
// }

// do while loop
let n = prompt("enter number");
let i = 0;
do {
    console.log(i);
    i++;
} while (i<n);













