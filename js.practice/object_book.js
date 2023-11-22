//? Create an object representing a book. It should have properties like title, author, and year, and a method that prints out a sentence describing the book.


//! By class syntax
class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Info(){
        console.log(`this book named ${this.title} is written by ${this.author} in ${this.year}`);
    }
}
let print = new Book("Khyber Rifles", "Zaz", 2009);
console.log(print.Info());

//! By object syntax
// let Book = {
//     title : "Khyber Rifles",
//     author : "Zaz",
//     year : 2009,
//     info : function(){
//         console.log(`this book named ${this.title} is written by ${this.author} in ${this.year}`);
//     }
// };
// console.log(Book.info());
