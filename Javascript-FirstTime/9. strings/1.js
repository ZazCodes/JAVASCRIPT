
// Simple String
let name = "zaz bro";
console.log(name);
console.log(name.length);
// string types
console.log(name.toUpperCase());
console.log(name.slice(4, 6)); // includes 4, 5 and not 6
console.log(name.slice(2)); // from 2 index to end
console.log(name.replace("bro", "bhai")); // replace

// Template String
let a = "he";
let b = "me";
console.log(`${a} is friend of ${b}`);

// string types
let life =  "zaz ";
let dead = "bro";
console.log(life.concat("is a friend of ", dead)); // add

let death = "   gone is    ";
console.log(death.trim());
console.log(death.length);


// for loop to print string length
let code = "Programmer";
for(let i = 0; i < code.length; i++){
    console.log(code[i]);
}

// Q2 
let sentence = " in the sentence";
let word = "code";
console.log(sentence.includes(word));
console.log(`the word "${word}" ${sentence.includes(word) ? "is" : "is not"} ` + sentence)

console.log(` the word ${word} ${sentence.includes(word) ? "is " : "is not "}` + sentence)

// Q4
let string = "please give me amount Rs 100";
let amount = Number.parseInt(string.slice("please give me amount Rs ".length));
console.log(amount);
console.log(typeof amount);





