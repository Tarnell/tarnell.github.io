import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './IndividualSection.module.scss';

const IndividualSection = ({ index, setGuestCallback, attendingCallback }) => {
  const [guestAttending, setGuestAttending] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  const onAttendingChange = (e) => {
    const { value } = e.currentTarget;
    const isAttending = value === 'true';

    if (isAttending) {
      attendingCallback(1);
    } else {
      attendingCallback(-1);
      setGuestEmail('');
    }
    setGuestAttending(isAttending);
  };

  useEffect(() => {
    setGuestCallback(guestAttending, guestEmail, guestName);
  }, [guestAttending, guestEmail, guestName]);

  return (
    <div className={styles.individualSection}>
      <div className={styles.name}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setGuestName(e.currentTarget.value)}
        />
      </div>
      <div className={styles.attendance}>
        <label className={styles.attendanceItem} htmlFor={`${index}_attending`}>
          Will be attending
          <input
            type="radio"
            id={`${index}_attending`}
            name={`${index}_rsvp_status`}
            value
            onClick={onAttendingChange}
          />
        </label>
        {
          guestAttending && (
            <div className={styles.email}>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setGuestEmail(e.currentTarget.value)}
              />
            </div>
          )
        }
        <label className={styles.attendanceItem} htmlFor={`${index}_declining`}>
          Will not be attending
          <input
            type="radio"
            id={`${index}_declining`}
            name={`${index}_rsvp_status`}
            value={false}
            onClick={onAttendingChange}
          />
        </label>
      </div>
      {/* { attending === 'ATTENDING' && (
      <>
        <div className={styles.dietarySelection}>
          <label htmlFor="meal_1">
            Meal Option #1
            <input type="radio" id="meal_1" name="meal_selection" value="MEAL_1" />
          </label>
          <label htmlFor="meal_2">
            Meal Option #2
            <input type="radio" id="meal_2" name="meal_selection" value="MEAL_2" />
          </label>
          <label htmlFor="meal_3">
            Meal Option #3
            <input type="radio" id="meal_3" name="meal_selection" value="MEAL_3" />
          </label>
        </div>
      </>
      )} */}
    </div>
  );
};

IndividualSection.propTypes = {
  index: PropTypes.number.isRequired,
  setGuestCallback: PropTypes.func.isRequired,
  attendingCallback: PropTypes.func.isRequired,
};

export default IndividualSection;
