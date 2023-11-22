let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("value 1")
    }, 500)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 2")
    }, 2000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3")
    }, 1000)
})

// let all_promises = Promise.all([p1, p2, p3]); // when one reject, all error
// all_promises.then((value) => {
//     console.log(value);
// })

// let all_promises = Promise.allSettled([p1, p2, p3]);  // when one reject , other normal
// all_promises.then((value) => {
//     console.log(value);
// })

// let all_promises = Promise.race([p1, p2, p3]);
// all_promises.then((value) => {
//     console.log(value);
// }) 

let all_promises = Promise.any([p1, p2, p3]); // extended form of race, when one value reject
all_promises.then((value) => {
    console.log(value);
});