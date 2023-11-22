// Write a function called findMax that takes an array of numbers as input and returns the largest number in the array. The function should utilize loops, variables, and conditionals.


function FindMax(arr){
   return arr.reduce(function(max, current){ // max set to 22 and current to 11
    return max > current ? max :current;
   });
};
let array = [22,11,434,55,44,2,1,122,55];
console.log(FindMax(array));