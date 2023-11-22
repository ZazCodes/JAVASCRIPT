const a = [1, 2, 3, 4, 5, 6];
console.log(a[0]);

//! Array methods
// push --> adds in last
// pop --> removes from last
// shift --> start insert
// unshift --> start removes
// arrayname.includes
// indexOf --> index showing
// .join --> adds all elements to string (actually type is converted to string)
// slice --> ( 1 , 3 )  prints 1 to 2
// splice --> ( 1(start point) , 3(removes 3 elements), 22,33,44(replace that three by this 3) ) prints 1 to 3

//? difference slice and splice
// splice changes original array , but slice do not manipulate it

//? difference between push and concat
// concat adds two array and returns new array
// push adds array in existing array, resulting in messy code
let arr = [1,2,3];
let brr = [4,5,6];
// arr.push(brr);  // push
// console.log(crr);
let crr = arr.concat(brr); // concat
console.log(crr);

// spread operator
let all = [...arr, ...brr];
console.log(all);    // same as concat but preffered

// flat
let ok = [1,2, [3,4,5], 6,7,[8], [9, [10]]];
console.log(ok.flat(Infinity));  // any amoount in place of infinity

// array.of
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1 , score2 , score3));

// array.from
let me = "zaz";
console.log(Array.from(me));

//! Destructuring in Arrays
let abc = [1,2,3,4,5];
const [fst, snd, trd,frt, ffth] = abc;
console.log(fst);
console.log(snd);
console.log(trd);
console.log(frt);
console.log(ffth);