class RsvpPayload {
  constructor(firstGuest, secondGuest, transportation, children, numberOfChildren, authCode) {
    this.guests = [firstGuest, secondGuest];
    this.transportation = transportation;
    this.children = children;
    this.numberOfChildren = numberOfChildren;
    this.authCode = authCode;
  }

  setTransportation(value) {
    this.transportation = value;
  }

  setNumberOfChildren(value) {
    this.numberOfChildren = value;
  }

  setChildren(value) {
    this.children = value;
  }

  setGuestName(index, name) {
    this.guests[index].setName(name);
  }

  setGuestEmail(index, email) {
    this.guests[index].setEmail(email);
  }

  setGuestAttending(index, attending) {
    this.guests[index].setAttending(attending);
  }
}

export default RsvpPayload;
