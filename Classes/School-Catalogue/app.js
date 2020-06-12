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
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
      // const numSubTeachers = ;
      // console.log(substituteTeachers);
      // console.log(substituteTeachers.length);
      const numSubTeachers = substituteTeachers.length;
      const randomNum = Math.floor(Math.random() * (numSubTeachers - 1));
      // console.log(randomNum);
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
        console.log(i);
        console.log(this._sportsTeams[i]);
      }; 
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  console.log(lorraineHansbury);
  lorraineHansbury.quickFacts();
  const subTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
  console.log(School.pickSubstituteTeacher(subTeachers));
  
  const alSmith = new SecondarySchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith);