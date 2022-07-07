class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return 'Out of stock';
    } else if (this.numCopies < 10) {
      return 'Low stock';
    }
    return 'In stock';
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

/*
  WRITE YOUR SOLUTION HERE
*/

class FantasyBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  // Getter
  get edition() {
    return `The current version of this book is ${this.e} edition.`;
  }

  // Setter
  set edition(edition) {
    this.e = edition;
  }
}

const Eragon = new FantasyBook(
  'Eragon',
  'Christopher Paolini',
  '43224',
  '1000000',
  '11th'
);

console.log(Eragon.edition);
