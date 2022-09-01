import React from 'react';
import useDictionary from 'app/Hooks/useDictionary';
import styles from './NotImplemented.module.scss';

const NotImplemented = () => (
  <div className={styles.contentWrapper}>
    <div className={styles.headerWrapper}>
      <span className={styles.header}>
        { useDictionary('not_implemented_heading') }
      </span>
    </div>
    <div className={styles.copyWrapper}>
      <span className={styles.copy}>
        { useDictionary('not_implemented_details') }
      </span>
    </div>
  </div>
);

export default NotImplemented;
