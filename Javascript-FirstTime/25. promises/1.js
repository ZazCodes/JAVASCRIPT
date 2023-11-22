let promise = new Promise(function(resolve, reject){
    console.log("Hello");
    resolve(9);
})

console.log("Hello One");

setTimeout(function(){
    console.log('Hello 2')
}, 2500);

console.log("Hello 3");

console.log(promise);