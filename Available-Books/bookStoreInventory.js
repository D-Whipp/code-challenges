//  Challenge: Develop an inventory application for a bookstore
// Create a Book class which provides information
// about different books in the store
// 1. Title 2. Author 3. ISBN 4. numCopies
////////////////////////////////////////////////////////////////
// 1) I'll need a way to get each book's availability
// If there's no more copies of the book left
// Return 'out of stock'
// return 'low stock' if < 10 copies
// return in stock otherwise
///////////////////////////////////////////////////////////////
// 2) I'll need a function for selling a book
// sell(numSold)
// it'll take the number of books sold and
// subtract it from the total number of copies
// if no argument is passed
// we can default the number of copies to sell to one
///////////////////////////////////////////////////////////////
// 3) I'll need a restock function
// which takes in a number of copies to restock and
// adds it to the total number of copies
// if no argument is passed default the restock number to 5
// ////////////////////////////////////////////////////////////
// USE JavaScript classes
// USE getter method

// My WORK
// class Book {
//   constructor(title, authorFirst, authorLast, isbn, numCopies) {
//     (this.title = title),
//       (this.authorFirst = authorFirst),
//       (this.authorLast = authorLast),
//       (this.isbn = isbn),
//       (this.numCopies = numCopies);
//   }

//   // Getters
//   get author() {
//     return `${this.authorFirst} ${this.authorLast}`;
//   }

//   get available() {
//     return `${this.stock} left.`;
//   }

//   // Setters
//   set author(name) {
//     this.authorFirst = this.authorFirst.split(' ')[0];
//     this.authorLast = this.authorLast.split(' ')[1];
//   }

//   set available(availability) {
//     this.stock = this.numCopies;
//   }
// }

// const BSand = new Book(
//   'Stormlight Archive',
//   'Brandon',
//   'Sanderson',
//   1,
//   5
// );

// console.log(BSand.author);
// console.log(BSand.available);

// their solution
// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author - author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function () {
//   if (this.numCopies === 0) {
//     return 'Out of stock';
//   } else if (this.numCopies < 10) {
//     return 'Low stock';
//   } else {
//     return 'In stock';
//   }
// };

// Book.prototype.sell = function (numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold;
// };

// Book.prototype.restock = function (numCopiesStocked = 5) {
//   this.numCopies += numCopiesStocked;
// };

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return 'Out of Stock';
    } else if (this.numCopies < 10) {
      return 'Low Stock';
    }
    return 'In Stock';
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesRestocked = 5) {
    this.numCopies += numCopiesRestocked;
  }
}

const HungerGames = new Book(
  'Hunger Games',
  'Suzanne Collins',
  123494,
  5
);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());
