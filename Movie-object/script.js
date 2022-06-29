// Create a movie object that takes in five arguments
// 1 - Title, 2 - Director, 3 - Genre, 4 - Release Year, 5 - Rating
// The Movie Prototype should have a function called 'Get Overview'
// which logs the following overview for each film
// MOVIE, a GENRE film directed by DIRECTOR was released in RELEASEYEAR.
// It received a rating of RATING.
// Use class or function syntax to create prototype
// once created, create a few movies to test it out

// //////////////////////////////////
// MY SOLUTION
// /////////////////////////////////
// class Movie {
//   constructor(title, director, genre, releaseYear, rating) {
//     (this.title = title),
//       (this.director = director),
//       (this.genre = genre),
//       (this.releaseYear = releaseYear),
//       (this.rating = rating);
//   }

//   get overview() {
//     return this.getOverview();
//   }

//   getOverview() {
//     return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
//   }
// }

// const HocusPocus = new Movie(
//   'Hocus Pocus',
//   'Anne Fletcher',
//   'Comedy, Family, Horror...',
//   2022,
//   'PG-13'
// );

// const TopGunMaverick = new Movie(
//   'Top Gun: Maverick',
//   'Joseph Kosinki',
//   'Action, Drama',
//   2022,
//   'PG-13'
// );

// const Willow = new Movie(
//   'Willow',
//   'Ron Howard',
//   'Fantasy',
//   1988,
//   'PG'
// );

// console.log(HocusPocus.overview);
// console.log(TopGunMaverick.overview);
// console.log(Willow.overview);
// SUCCESS

// /////////////////////////////////
// THEIR SOLUTION
// /////////////////////////////////
// DID YOU KNOW: if you use a capital letter with the function then the function must be called with the 'new' keyword
// FUNCTION KEYWORD
// function Movie(title, director, genre, releaseYear, rating) {
//   this.title = title;
//   this.director = director;
//   this.genre = genre;
//   this.releaseYear = releaseYear;
//   this.rating = rating;
// }

// Movie.prototype.getOverview = function () {
//   return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
// };

// CLASS KEYWORD
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
  }
}

const Spiderman = new Movie(
  'Spiderman',
  'Sam Raimi',
  'Action',
  2002,
  87
);
const Batman = new Movie(
  'The Dark Knight',
  'Christopher Nolan',
  'Action',
  2008,
  83
);

console.log(Spiderman.getOverview());
console.log(Batman.getOverview());
