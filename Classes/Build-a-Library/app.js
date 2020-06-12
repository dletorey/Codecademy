class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this.ratings = [];
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