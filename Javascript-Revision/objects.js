let obj = {
    name : "zaz",
    rollNo : 18,
    studentOf : function(){
        console.log("Student of CS");
    },
    workingOn : ["HTML", "CSS", "JS"],
    "second Name" : "Bro Khan",
}

obj.email = "zazcodes@gmail.com";  // add from outside to object

console.log(obj.email);
console.log(obj.name);
console.log(obj.studentOf());
console.log(obj.workingOn[1]); // also can use index
console.log(obj["second Name"]); // cannot be accssed by dot operator

Object.freeze(obj); // cannot be changed further

//? Accessing keys and values of objects
let a = Object.keys(obj);
console.log(a);
let b = Object.values(obj);
console.log(b);
let c = Object.entries(obj);
console.log(c);


//! Nesting in objects
let me = {
    name : {
        furthername : {
            "Full Name" : {
                firstName : "zaz nesting",
                "Second Name" : "Bro nesting"
            }
        }
    }
}
console.log(me.name.furthername["Full Name"]["Second Name"]); // nesting objects accessing syntax

//! Merging objects in a single objects
let obj1 = {
    1 : 100,
    2 : 200
}
let obj2 = {
    3 : 300,
    4 : 400
}

// let himHer = {him, her};  // messy result, so we not use it
let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
// we use {} in assign, because it(object.assign) creates new object{}, so we add obj1, obj2
// to that object, if we don't use {} in start then everything, it means obj2 object adds in
// obj1 object, which is not a good practice.

//! Spread Operator
let obj3Extends = {...obj1, ...obj2}; // 90% will be using this syntax
console.log(obj3Extends);

//! objects in Arrays
let khan = [
    {
        name : "Zaz",
        rollNo : 18
    },
    {
        name1 : "Zaz1",
        rollNo1 : 19
    },
    {
        name2 : "Zaz2",
        rollNo2 : 20
    }
]
let print = khan[0].rollNo;
console.log(print);

//! Destructuring in Objects
let abc = {
    kon :"Me",
    gee : "he",
    number : 302
}
let {kon, gee, number : num, country = "unknown"} = abc; // we can assoign default values
console.log(kon);
console.log(gee);
console.log(num); // we can change name in destructuring
// in short destructuring is {}.