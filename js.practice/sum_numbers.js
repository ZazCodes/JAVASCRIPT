 //? Write a program that calculates the sum of all the even numbers in an array of integers. The program should use a loop to iterate through the array, and it should utilize variables, loops, arrays, and conditionals.


let arr = [1,2,3,4,5,6,7,8,9,10];
let result = 0;
arr.forEach(function(e){
    if(e % 2 === 0){
        result += e;
    }
})
console.log(result);