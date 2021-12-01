import React from 'react';

import styles from './Rsvp.module.scss';

const addGuest = async () => {
  const firstName = 'Trevor';
  const lastName = 'Magical';
  const rsvp = 'Attending';

  try {
    const route = `api/writeGuest?firstName=${firstName}&lastName=${lastName}&rsvpStatus=${rsvp}`;
    const response = await fetch(route, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error(`getImages: error occurred ${error}`);
    return error;
  }
};

const Rsvp = () => (
  <div className={styles.rsvp}>
    <button type="submit" onClick={addGuest}>
      Add Guest
    </button>
  </div>
);

export default Rsvp;
