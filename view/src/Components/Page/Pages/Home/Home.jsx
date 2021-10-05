import React from 'react';

import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.contentWrapper}>
      <div className={styles.headerWrapper}>
        <span className={styles.header}>
          We Cordially Invite You To The Wedding of Autumn and Tarnell
        </span>
      </div>
      <div className={styles.copyWrapper}>
        <span className={styles.copy}>
          {'It is a long established fact that a reader will be '
          + 'distracted by the readable content of a page when '
          + 'looking at its layout. The point of using Lorem '
          + 'Ipsum is that it has a more-or-less normal distribution '
          + "of letters, as opposed to using 'Content here, content here' "
          + 'making it look like readable English. Many desktop publishing '
          + 'packages and web page editors now use Lorem Ipsum as their '
          + "default model text, and a search for 'lorem ipsum' will "
          + 'uncover many web sites still in their infancy. Various versions '
          + 'have evolved over the years, sometimes by accident, sometimes on '
          + 'purpose (injected humour and the like).' }

        </span>
      </div>
    </div>
  </div>
);

export default Home;
