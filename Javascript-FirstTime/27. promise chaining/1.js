let p1 = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        console.log("resolved after 2.5s")
        resolve(9);
    }, 2500);
})

p1.then((value) =>{
    console.log("we are done for promise 1")

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("resolved after 3s for p2")
            resolve("promise 2");
        }, 3000)
    }).then((value) => {
        console.log("we are done for promise 2")
    }).then((value) => {
        console.log("we are done again for promise 2")
    });
});