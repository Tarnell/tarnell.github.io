import React, { useState } from 'react';
import * as qs from 'query-string';
import styles from './Rsvp.module.scss';
import IndividualSection from './IndividualSection';
import RsvpPayload from './rsvpPayload';
import Person from './person';

const Rsvp = () => {
  const [firstGuest, setFirstGuest] = useState(null);
  const [secondGuest, setSecondGuest] = useState(null);
  const [attending, setAttending] = useState(0);
  const [children, setChildren] = useState(false);
  const [needsTransport, setNeedsTransport] = useState(false);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // eslint-disable-next-line no-restricted-globals
  const { authCode } = qs.parse(location.search);

  const onChildrenChange = (e) => {
    const hasChildren = e.currentTarget.value === 'true';

    setChildren(hasChildren);
    if (!hasChildren) {
      setNumberOfChildren(0);
    }
  };

  const onNumberOfChildrenChange = (e) => {
    const childrenCount = parseInt(e.currentTarget.value, 10);

    setNumberOfChildren(childrenCount);
  };

  const onTransportationChange = (e) => {
    const needsTransportation = e.currentTarget.value === 'true';

    setNeedsTransport(needsTransportation);
  };

  const updateAttending = (addedValue) => {
    const newValue = attending + addedValue;
    if (newValue >= 0 && newValue <= 2) {
      setAttending(newValue);
    }
  };

  const newGuest = (isAttending, email, name) => {
    const guest = new Person();

    guest.setAttending(isAttending);
    guest.setEmail(email);
    guest.setName(name);

    return guest;
  };

  const updateFirstGuest = (isAttending, email, name) => {
    setFirstGuest(newGuest(isAttending, email, name));
  };

  const updateSecondGuest = (isAttending, email, name) => {
    setSecondGuest(newGuest(isAttending, email, name));
  };

  const submitPayload = async (payload) => {
    const response = await (fetch('api/submitRsvp', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }));

    return response.json();
  };

  const submitForm = async () => {
    const rsvpPayload = new RsvpPayload(firstGuest, secondGuest,
      needsTransport, children, numberOfChildren, authCode);

    submitPayload(rsvpPayload).then(() => {
      setSubmitted(true);
    });
  };

  return (
    submitted ? (
      <div className={styles.rsvp} />
    ) : (
      <div className={styles.rsvp}>
        <h1>Kindly reply by July 01, 2023</h1>
        <section className={styles.eventDetails}>
          <span>
            <a className={styles.email} href="mailto: landrwedding@gmail.com">Contact Us</a>
          </span>
        </section>
        <IndividualSection
          index={0}
          setGuestCallback={updateFirstGuest}
          attendingCallback={updateAttending}
        />
        <IndividualSection
          index={1}
          setGuestCallback={updateSecondGuest}
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
              <input
                type="radio"
                id="need_transportation"
                name="transportation"
                onClick={onTransportationChange}
                value
              />
            </label>
            <label
              className={styles.sectionOption}
              htmlFor="no_transportation"
            >
              I will get there myself
              <input
                type="radio"
                id="no_transportation"
                name="transportation"
                onClick={onTransportationChange}
                value={false}
              />
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
                value
                onChange={onChildrenChange}
              />
            </label>
            {
            children && (
              <>
                <label
                  className={styles.sectionOption}
                  htmlFor="need_transportation"
                >
                  <input
                    type="text"
                    placeholder="How many children?"
                    onChange={onNumberOfChildrenChange}
                  />
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
                value={false}
                onChange={onChildrenChange}
              />
            </label>
          </div>
        </>
        )}

        <div className={styles.submitSection}>
          <input
            className={styles.button}
            type="submit"
            label="RSVP"
            onClick={submitForm}
          />
        </div>
      </div>
    )
  );
};

export default Rsvp;
