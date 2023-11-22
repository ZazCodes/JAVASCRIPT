//? Create a function in JavaScript that converts a string with spaces into a URL-friendly format. This means replacing spaces with hyphens (-) and converting all characters to lowercase. For example, if the input is "Hello World, How Are You?", the function should return "hello-world-how-are-you".

function Replace(input){
    return input.toLowerCase().replace(/\s/g , "-")
}

let originalString = "its me bro ZAZ";
let replacable = Replace(originalString);

console.log(`Original String is ${originalString}`);
console.log(`Relacable Atring is ${replacable}`);