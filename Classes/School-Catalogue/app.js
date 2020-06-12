class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === 'number') {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
    }
    quickFacts() {
      console.log(`${name} educates ${numberOfStudents} students at the ${level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
      const numSubTeachers = substituteTeachers.length;
      const randomNum = Math.floor(Math.random * (numSubTeachers - 1));
      return substituteTeachers[randomNum];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class SecondarySchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'secondary', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      for (let i = 0; i < this._sportsTeams.length; i++) {
        console.log(this._sportsTeams[0]);
      };
    }
}