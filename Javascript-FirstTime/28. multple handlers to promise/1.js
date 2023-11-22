let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve (4)
    }, 2000)
})

p.then((value) => {
    console.log(value);
    console.log("hello bro");
})

p.then(() => {
    console.log("hello 2")
})