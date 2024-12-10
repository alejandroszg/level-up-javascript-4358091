// Write your code here

class Movie {
  constructor(title, genre, director, releaseYear, rating) {
    this.title = title,
    this.genre = genre,
    this.director = director,
    this.releaseYear = releaseYear,
    this.rating = rating
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
  }
}

const inglouriousBasterds = new Movie('Bastardos sin Gloria', 'Dark comedy', 'Quentin Tarantino', 2009, 8.4);

console.log(inglouriousBasterds)
console.log(inglouriousBasterds.getOverview())
