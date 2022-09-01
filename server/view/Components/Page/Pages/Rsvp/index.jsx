import React, { useState } from 'react';
import * as qs from 'query-string';
import styles from './Rsvp.module.scss';
import IndividualSection from './IndividualSection';

// const addGuest = async () => {
//   const firstName = 'Trevor';
//   const lastName = 'Magical';
//   const rsvp = 'Attending';

//   try {
//     const route = `api/writeGuest?firstName=${firstName}&lastName=${lastName}
// &rsvpStatus=${rsvp}`;
//     const response = await fetch(route, {
//       method: 'POST',
//       mode: 'cors',
//       cache: 'no-cache',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     return response;
//   } catch (error) {
//     console.error(`getImages: error occurred ${error}`);
//     return error;
//   }
// };

const Rsvp = () => {
  const [attending, setAttending] = useState(0);
  const [children, setChildren] = useState('');

  const onChildrenChange = (e) => {
    setChildren(e.currentTarget.value);
  };

  const updateAttending = (addedValue) => {
    const newValue = attending + addedValue;
    if (newValue >= 0 && newValue <= 2) {
      setAttending(newValue);
    }
  };

  return (
    <div className={styles.rsvp}>
      <h1>Kindly reply by July 01, 2023</h1>
      <section className={styles.eventDetails}>
        <span>
          <a className={styles.email} href="mailto: landrwedding@gmail.com">Contact Us</a>
        </span>
      </section>
      <IndividualSection
        index={1}
        attendingCallback={updateAttending}
      />
      <IndividualSection
        index={2}
        attendingCallback={updateAttending}
      />
      { attending > 0 && (
      <>
        <div className={styles.section}>
          <h4 className={styles.sectionHeading}>
            Will you need transportation arranged to reach the venue?
          </h4>
          <label
            className={styles.sectionOption}
            htmlFor="need_transportation"
          >
            Need transportation
            <input type="radio" id="need_transportation" name="transportation" value="NEED_TRANSPORT" />
          </label>
          <label
            className={styles.sectionOption}
            htmlFor="no_transportation"
          >
            I will get there myself
            <input type="radio" id="no_transportation" name="transportation" value="NO_TRANSPORT" />
          </label>
        </div>
        <div className={styles.section}>
          <h4 className={styles.sectionHeading}>
            Will you be accompanied by children?
          </h4>
          <label
            className={styles.sectionOption}
            htmlFor="yes_children"
          >
            Yes
            <input
              type="radio"
              id="yes_children"
              name="children"
              value="YES"
              onChange={onChildrenChange}
            />
          </label>
          {
            children === 'YES' && (
              <>
                <label htmlFor="need_transportation">
                  <input type="text" placeholder="How many?" />
                </label>
              </>
            )
          }
          <label
            className={styles.sectionOption}
            htmlFor="declining"
          >
            No
            <input
              type="radio"
              id="no_children"
              name="children"
              value="NO"
              onChange={onChildrenChange}
            />
          </label>
        </div>
      </>
      )}

      <div className={styles.submitSection}>
        <input className={styles.button} type="submit" label="RSVP" />
      </div>
    </div>
  );
};

export default Rsvp;
