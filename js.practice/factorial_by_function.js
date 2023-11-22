//? Write a JavaScript function called calculateFactorial that takes a positive integer as an argument and returns its factorial. The factorial of a number is the product of all positive integers up to that number.

//? For example, if the input is 5, the function should return 120 (since 5! = 5 × 4 × 3 × 2 × 1 = 120).

function calculateFactorial(value){
    let facto = 1;
    for ( i = 2; i <= value; i++){
        facto *= i;
    }
    return facto;
}
console.log(calculateFactorial(5));