class Person {
  constructor() {
    this.attending = false;
    this.email = '';
    this.name = '';
  }

  setName(value) {
    this.name = value;
  }

  setEmail(value) {
    this.email = value;
  }

  setAttending(value) {
    this.attending = value;
  }
}

export default Person;
