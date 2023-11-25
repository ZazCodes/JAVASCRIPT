//? Write a function in JavaScript that takes an array of numbers as input and returns the sum of all the even numbers in the array.

let array = [1,2,3,4,5,6,7,8,9,10];
let arr = [];

function Even(a){
    for (let i = 0; i < a.length; i++){
        if(a[i] % 2 == 0){
            arr.push(a[i]);
        }
    }
    return arr;
}

console.log(Even(array));