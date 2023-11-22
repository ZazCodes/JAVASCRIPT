let a = {
    name2 : "zaz",
    language : "Js"
}

console.log(a)

let p = {
    run : () => {
        alert("run here")
    }
}

p.__proto__ = {
    name : "bro"
}

 a.__proto__ = p  // establishing a prototype chain
a.run()
console.log(a.name)