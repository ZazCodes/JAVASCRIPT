let a = null;
let b = 100;
let c = true;
let d = BigInt("7") + BigInt("3");
let e = Symbol("$");
let f = "hello";
let g = undefined;

console.log(a,b,c,d,e,f,g);
console.log(typeof  e);

// non-primitive data-types (objects)

const item = {
    "zaz" : true,
    [Symbol('zaz')] : "$",
     214 : "hello",
    "see": 12n + 3n,
    "me" : "i am"
}
// you can access object by dot or [ ] , choice is yours
console.log(item["zaz"]);        
console.log(item[214]);
console.log(item[Symbol('zaz')]);
console.log(item.see);
console.log(item["see"]); // by two methods
console.log(item.me);