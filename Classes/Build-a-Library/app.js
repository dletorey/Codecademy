class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings
    }
    set isCheckedOut(checkOut) {
      this._isCheckedOut = checkOut;
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut
    }
    getAverageRating() {
      let ratingsTotal = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const numOfRatings = this._ratings.length;
      return Math.round(ratingsTotal / numOfRatings * 10) / 10;
    }
    addRating(rating) {
      this._ratings.push(rating);
    }
}
class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(3);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);

const speed = new Movie ('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed);
console.log(speed.isCheckedOut);