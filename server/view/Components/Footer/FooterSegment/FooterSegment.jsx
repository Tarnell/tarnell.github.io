import React from 'react';
import PropTypes from 'prop-types';
import useDictionary from 'app/Hooks/useDictionary';

import styles from './FooterSegment.module.scss';

const FooterSegment = ({ content }) => (
  <div className={styles.footerSegment}>
    <span>{useDictionary(content)}</span>
  </div>
);

FooterSegment.propTypes = {
  content: PropTypes.string.isRequired,
};

export default FooterSegment;
