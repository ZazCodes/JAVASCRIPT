//? Write a JavaScript program that takes an array of numbers and returns the sum of all the positive numbers in the array.

//? For example, if the input is [5, -3, 8, -2, 0, 10, -1], the program should return 23 (since the positive numbers are 5, 8, and 10, and their sum is 23).

let array = [1,-2,3,-4,-5,6,7,-8,-9,10];
let sum = 0;
for (i = 0; i < array.length; i++){
    if (array[i] < 0){
        continue;
    }else{
        sum += array[i];
    }
}
console.log(sum);