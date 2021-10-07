import React from 'react';
import useDictionary from 'app/Hooks/useDictionary';

import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.contentWrapper}>
      <div className={styles.headerWrapper}>
        <span className={styles.header}>
          { useDictionary('header_invite') }
        </span>
      </div>
      <div className={styles.copyWrapper}>
        <span className={styles.copy}>
          { useDictionary('invite_details') }
        </span>
      </div>
    </div>
  </div>
);

export default Home;
