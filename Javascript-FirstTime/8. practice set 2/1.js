// Q1
const marks = {
    zaz : 12,
    fawad : 15,
    david : 20,
    osamay : 19,
}
for (const key in marks) {
    console.log(key, "marks is", marks[key]);
    }

// Q2
let cn = 76;
let i;
while (i != cn) {
    console.log("try again");
    i = prompt("enter a number");
}
console.log("you have entered correct number");
