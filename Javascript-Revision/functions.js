function Me(num1, num2){
    return num1 + num2;
}
console.log(`result is : ${Me(2, 3)}`);

//! Rest opertator and Function
function here(value1, value2, ...num){
    console.log(value1);
    console.log(value2);
    return num;
}
console.log(`value is : ${here(12,12,12222,2222,22222222)}`);
// spread operator when we not know how many arguments will be passed

//! Objects in Functions
// const user = {
//     name : "zaz",
//     roll : 18
// }
// function ZazPrint(anyobject){
//     console.log(`name is ${anyobject.name} and roll No is ${anyobject.roll}`);
// }
// ZazPrint(user);

// OR

function ZazPrint(anyobject){
    console.log(`name is ${anyobject.name} and roll No is ${anyobject.roll}`);
}
ZazPrint(user = {
    name : "zaz",
    roll : 18
});

//! Arrays in Functions
// let arr = [1,2,3,4,5];
// function ArrayPrint(anyarray){
//     return anyarray[0];
// }
// console.log(`Array : ${ArrayPrint(arr)}`);

// OR

function ArrayPrint(anyarray){
    return anyarray[0];
}
console.log(`Array : ${ArrayPrint([1,2,3,4,5])}`);