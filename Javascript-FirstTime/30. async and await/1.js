async function zaz(){
    let mardan = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 2000)
       
    })

    let swat = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("18 deg")
        }, 4000)
       
    })
    let mar = await mardan;
    console.log("mardan weather is " + mar);

    let swa = await swat;
    console.log("swat weather is " + swa);

    return[mar, swa];
}

console.log("weather fetching ");
let a = zaz();
console.log(a);
a.then((value) => {
    console.log(value);
});