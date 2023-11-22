//? Write a function in JavaScript that takes a sentence as input and returns the word with the longest length. If there are multiple words with the same longest length, return the first one you encounter.

let sentence = "i am the greatest of all time";

function LongWord(sent){
   let words = sent.split(" ");
   let long = "";

   for (let word of words){
    if (words.length > long.length){
        long = word;
    }
   }
   return long;
}
let longestWord = LongWord(sentence);
console.log(longestWord);