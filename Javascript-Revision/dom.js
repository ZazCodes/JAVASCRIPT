
//! notes! 
//  inner text -> contains text content 
//  text content -> contains all text content (also invisible)
//  inner html -> contains text and also html tage

//? Important!
// When you use querySelectorAll, it returns a NodeList, which is not an actual array.
// This means that you can't directly use array methods like forEach on it.
// That's where Array.from() or the spread operator ([...nodeList]) come in handy. They can 
// convert a NodeList into an actual array, allowing you to use array methods like forEach