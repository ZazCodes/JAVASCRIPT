// forEach does not return values so we use these methods

// map: This function is used when you want to transform each element of an array and get a
// new array of the same length in return.

// filter: Use this function when you want to create a new array that only contains elements
// that pass a certain condition

//reduce: This function is used when you want to accumulate a value by iterating through an
// array. It reduces the array to a single value.

//! Filter
let arr = [1,2,3,4,5,6,7];
let fllt = arr.filter( (num) => {
    return num > 5;
});
console.log(fllt);

// or by foreach

let newarr = [];
arr.forEach((num) => {
    if (num > 5){
        newarr.push(num);
    };
});
console.log(newarr); 

//? Filter Example
let library = [
    {
        book : "C++",
        edition : 2005
    },
    {
        book : "Javascript",
        edition : 2012
    },
    {
        book : "Java",
        edition : 1990
    },
    {
        book : "C",
        edition : 1985
    },

];
let print = library.filter( (bk) => {
    return bk.edition >=2000;
});
console.log(print);


//! Map
let MapArray = [1,2,3,4,5];
let printmap = MapArray.map((num) => {
    // return num > 3; // output : [ false, false, false, true, true ] cz map transforms array
    return num + 3;
});
console.log(printmap);

//? Chaining
let newarray = [1,22,666,33,23,54,666,7777,990440];
let printnew = newarray.map( (num) => num + 1)
                       .map( (num) => num + 1) // here num value is above map result
                       .filter( (num) => num > 500); // here also above result
console.log(printnew);


//! Reduce
let redu = [1,2,3];
let prt = redu.reduce( (num, current) => num + current);
console.log(prt);