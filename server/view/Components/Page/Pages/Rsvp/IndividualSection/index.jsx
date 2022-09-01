import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './IndividualSection.module.scss';

const IndividualSection = ({ index, name, attendingCallback }) => {
  const [attending, setAttending] = useState('');

  const onAttendingChange = (e) => {
    if (e.currentTarget.value === 'ATTENDING') {
      attendingCallback(1);
    } else {
      attendingCallback(-1);
    }

    setAttending(e.currentTarget.value);
  };

  return (
    <div className={styles.individualSection}>
      <div className={styles.name}>
        <input
          type="text"
          value={name}
          placeholder="Name"
        />
      </div>
      <div className={styles.attendance}>
        <label htmlFor="attending">
          Will be attending
          <input
            type="radio"
            id="attending"
            name={`${index}rsvp_status`}
            value="ATTENDING"
            onChange={onAttendingChange}
          />
        </label>
        <label htmlFor="declining">
          Regretfully declining
          <input
            type="radio"
            id="declining"
            name={`${index}rsvp_status`}
            value="DECLINING"
            onChange={onAttendingChange}
          />
        </label>
      </div>
      { attending === 'ATTENDING' && (
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
      )}
    </div>
  );
};

IndividualSection.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  attendingCallback: PropTypes.func.isRequired,
};

export default IndividualSection;
