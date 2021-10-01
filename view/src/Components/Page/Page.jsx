import React from 'react';
import PropTypes from 'prop-types';

import styles from './Page.module.scss';

const Page = ({ pageName }) => (
  <div className={styles.page}>
    <span>{pageName}</span>
  </div>
);

Page.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default Page;
