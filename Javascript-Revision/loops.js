//! For Loops

for (let i = 0; i <= 10; i++){
    console.log(`inner loop for i : ${i}`);
    for(let j = 0; j <= 10; j++){
        // console.log(`outer loop for i ${i} and j : ${j} `);
        console.log(`${i} * ${j} = ${i*j}`)
    };
};

//? Break and Continue in For loops
for (let i = 1; i <= 10; i++){
    if (i == 5){
        break;             // break
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++){
    if (i == 5){
        continue;             // continue
    }
    console.log("continue : ", i);
}

//! While Loops
let i = 0;
while( i <= 10){
    console.log("while loop : ", i);
    i++;
}

//! Do While Loop
let game = 3;
do{
    console.log("do while : ", game); 
    game++;
}while(game < 6){
}

//! Loop on Arrays
let arr = ['zaz', 'khan', 'bro'];
for (let i = 0; i < arr.length; i++ ){
    console.log(arr[i]);
}

//! For of loops

//? arrays
let a = ['me', 'ok', 'here'];
for (const print of a) {
    console.log(`for of : ${print}`);
}

//? for of do not work in objects

//? for of on Map
let map1 = new Map();
map1.set('name', 'zaz');
map1.set('rollno', 18);
for (const [key , value] of map1) {
    console.log(`for map : ${key} and ${value}`)
}

//! for in loops
// for in loops can be used both for objects and arrays

//? Arrays
let arra = ['david', 'faw', 'osa'];
for (const printing in arra) {
    console.log(arra[printing]);
}

//? objects
let obj = {
    name : "good",
    second : "not good"
};
for (const key in obj) {
    console.log(`${key} : ${obj[key]}`)
};

//! For Each loop

//? for pure arrays
let newarray = ['done', 'from', 'here'];
newarray.forEach(function (itemfromaaray){ // three arguments taking, item, index, array
    console.log(itemfromaaray);
});

//? for objects in arrays
let program = [
    {
        name : "javascript",
        short : "js"
    },
    {
        name : "c plus plus",
        short : "cpp"
    },
    {
        name : "java",
        short : "j"
    },
];
program.forEach(function(item){
    console.log(item.name);
});