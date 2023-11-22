//? Write a JavaScript program that takes a sentence and counts the number of vowels (a, e, i, o, u) in it.

//? For example, if the input is "Hello, how are you?", the program should return 8 (since there are 8 vowels in the sentence).


let str = "Bro, i am learning javascript";
let result = "";
let sum = 0;

for( i = 0; i < str.length; i++){
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
        result += str[i];
    }
}
// console.log(result);

for (let i = 0; i < result.length; i++){
    sum ++;
}
console.log(sum);