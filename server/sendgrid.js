const sendgrid = require('@sendgrid/mail');

const SENDGRID_API_KEY = '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';

sendgrid.setApiKey(SENDGRID_API_KEY);

const rsvpSubject = (rsvpJson) => {
  const hasSecondGuest = rsvpJson.guests[1].name !== '';

  const guestString = hasSecondGuest ? `${rsvpJson.guests[0].name} and ${rsvpJson.guests[1].name}`
    : rsvpJson.guests[0].name;

  return `New Reservation for: ${guestString}`;
};

const rsvpBody = (rsvpJson) => (
  `<div>
    <h1>There has been a new reservation submitted</h1>
    <h2>Details can be found below</h2>
    <p>
      <h3>Guest One Name: ${rsvpJson.guests[0].name}</h3>
      <h3>Guest One Email: ${rsvpJson.guests[0].email}</h3>
      <h3>Guest One Attending: ${rsvpJson.guests[0].attending}</h3>
    </p>
    <p>
      <h3>Guest One Name: ${rsvpJson.guests[1].name}</h3>
      <h3>Guest One Email: ${rsvpJson.guests[1].email}</h3>
      <h3>Guest One Attending: ${rsvpJson.guests[1].attending}</h3>
    </p>
    <h3>Transportation Required? - ${rsvpJson.transportation} </h3>
    <h3>Bring children ? - ${rsvpJson.children} </h3>
    <h3>Number of children - ${rsvpJson.numberOfChildren} </h3>
  </div>`
);

const sendRsvpEmail = async (rsvpJson) => {
  const msg = {
    to: 'laandrwedding@gmail.com',
    from: 'reilly.steere@gmail.com',
    subject: rsvpSubject(rsvpJson),
    html: rsvpBody(rsvpJson),
  };

  return sendgrid
    .send(msg)
    .then((resp) => `Email sent: ${resp}`)
    .catch((error) => `Error sending email: ${error}`);
};

module.exports = { sendRsvpEmail };
