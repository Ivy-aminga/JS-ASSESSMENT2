const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

// 1. Create a function called getAvailableBooks that returns an array of all available
// books.

function getAvailableBooks() {
        return books.filter(book =>book.isAvailable);
    }
    console.log(getAvailableBooks())

// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

function getBooksByAuthor(author) {
     return books.filter(book => book.author === author);
    }
    console.log(getBooksByAuthor(`homer`))

// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).

function addNewBook(book) {
    let requiredProperties = ['title', 'author', 'publicationYear', 'isAvailable'];
    let bookProperties = [];
    if (requiredProperties.every(property => bookProperties.includes(property))) {
        books.push(book);
    }
}
console.log('Book object is missing required properties.');
// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.

function checkoutBook(title) {
    let changes = books.find(book => book.title === title);
    if (changes) {
        changes.isAvailable = false;
        } else {
        return `${title} is not available in the library`;
    }
}
console.log('Book is not available in the library.');

// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

function returnBook(title) {
    let book = books.find(book => book.title === title);
    if (book) {
        book.isAvailable = true;
    } else {
        return `${title} does not belong to the library`;
    }
}
console.log('Book does not belong to the library.');
