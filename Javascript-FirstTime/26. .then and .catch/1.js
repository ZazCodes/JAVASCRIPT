let p = new Promise((resolve, reject) =>{
    console.log("promise is pending");
    setTimeout(() =>{
        console.log("i am promise and i am resolved");
        resolve(true);
    }, 2500);
});


let p2 = new Promise((resolve, reject) =>{
    console.log("promise is pending");
    setTimeout(() =>{
        console.log("i am promise andd i am rejected");
        reject(new Error("error occured here"));
    }, 2500);
});

p.then((value) =>{
    console.log(value);
});

// p2.catch((value) =>{p
//     console.log(value)
// })

p2.catch((error) =>{
    console.log("some error occured in p2");
});