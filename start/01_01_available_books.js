// Write your code here
class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if( this.numCopies === 0 ) {
      return 'Out of stock'
    } else if ( this.numCopies < 10 ) {
      return 'low stock'
    } else if( this.numCopies > 10 ) {
      return 'in stock'
    }
  }

  sell(numCopiesSold = 1) {
    return this.numCopies -= numCopiesSold
  }

  restock(numCopiesStocked = 5) {
    return this.numCopies += numCopiesStocked
  }
}

const atomicHabits = new Book("Atomic Habits", "James Clear", 9783442178582, 50)