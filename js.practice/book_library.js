class Book{
    constructor(title, author, genre, numPages){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.numPages = numPages;
    }
    displayInfo(){
        console.log(`Title is : ${this.title}`);
        console.log(`Author is : ${this.author}`);
        console.log(`Genre is : ${this.genre}`);
        console.log(`Number of pages is : ${this.numPages}`);
    }
}

class Library{
    constructor(){
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
    removeBook(title){
        this.books = this.books.filter(book => book.title !== title);
    }
    listBooks(){
        this.books.forEach(function(book){
            return book.displayInfo();
        })
    }
}

let lib = new Library();

const book1 = new Book("1984", "George Orwell", "Dystopian", 328);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 281);

lib.addBook(book1);
lib.addBook(book2);

// lib.removeBook("1984")
lib.listBooks();