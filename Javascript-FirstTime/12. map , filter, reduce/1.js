// Map method
let array  = [1,2,3,4,5];
let a = array.map((number, index, array) =>{
    console.log(number, index, array);
    return number + 1;
});
console.log(a);

// array filter method
let b = array.filter((value) => {
    return value<4
})
console.log(b);

// reduce method












