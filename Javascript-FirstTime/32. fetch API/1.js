// let a = fetch("https://www.boredapi.com/api/activity");
// a.then((response) => {
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)

//     return response.json();
// }).then((value2) => {
//     console.log(value2);
// })


// post request
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

const create = async (todo) => {
let options = {
    method : "POST" ,
    headers : {
        "Content-type" : "application/json"
    },
    body : JSON.stringify(todo),
}

let p = await fetch('https://jsonplaceholder.typicode.com/posts',options )
let response = await p.json();
return response;
}

let mainfun = async () => {
    let todo = {
        title: 'zaz',
        body: 'bro',
        userId: 18,
      }
    let todor = await create(todo);
    console.log(todor);
}

mainfun() // calling the main fuction

