function book(title, author, pages, read){

   this.title = title
   this.author = author
   this.pages = pages
   this.read = read
   this.info = function(){
        console.log(`${this.title}, ${this.author}, ${this.pages}, ${this.read}`)
   } 
}

let result = new book('The Hobbit by J.R.R', 'Tolkien', '295 pages', 'not read yet')

result.info()

