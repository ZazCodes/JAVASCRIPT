try {
    let age = prompt("enter your age");
    age = Number.parseInt(age);

if (age > 150)
throw new ReferenceError("this is not true"); // also you can write only Error
}

catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log("i am running bro, don't worry ");