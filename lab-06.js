class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
}

class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = ""} = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn};
        this._books.push(newBook);
      }
    }
    deleteBook(isbn) {
        //(1) Find the index of the book with the given isbn within the "books" array.
        let indexOfBookToRemove = null;
        let index = 0;
        for (const book of this._books) {
            if(book.isbn == isbn){
                indexOfBookToRemove = index;
                break;
            }
            index += 1;
        }

        //(2) Once the index has been found, remove the entry from "books".
        this._books.splice(indexOfBookToRemove, 1)
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`)
      }
    }
}

const myBook = new Book("AP Calc Crash Course", "Banu et al.", "01/01/2013", "1234567890");
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0987654321");

let uoLibrary = new Library("Knight Library");
console.log("Adding");
uoLibrary.addBook(myBook);
uoLibrary.addBook(atomicHabits);
uoLibrary.listBooks();
console.log("Deleting");
uoLibrary.deleteBook("1234567890");
uoLibrary.listBooks();