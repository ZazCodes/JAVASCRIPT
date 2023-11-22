//! First
let PromiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Promise one resolved");
        resolve();
    }, 1000);
});
PromiseOne.then(function(){
    console.log("Promise one resolved fully");
});

//! Second
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Promise two resolved");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Promise two resolved fully");
});

//! Third
let PromiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log({username : "zaz", RollNo : "18"});
        resolve();
    }, 1000);
})
PromiseThree.then(function(user){
    console.log(user);
});

//! Four
let PromiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username : "zaz", RollNo : "20"});
        }
        else{
            reject("ERROR : promise is rejected");
        }
    }, 1000);
});
PromiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) =>{
    console.log(error);
}).finally(() => {
    console.log("finally ");
});

//! Five
let PromiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username : "JS", RollNo : "123"});
        }
        else{
            reject("ERROR bro : JS is rejected");
        }
    }, 1000);
});
async function ForPromiseFive(){
    try {
        let response = await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
ForPromiseFive();


//! More about aync await
async function GetAPI(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`E : ${error}`);
    }
};
// GetAPI();


 // OR by then catch
 fetch("https://jsonplaceholder.typicode.com/users")
 .then((response) => {
    return response.json()
 })
 .then((data) => {
    console.log(data);
 })
.catch(() => {
    console.log(error);
});