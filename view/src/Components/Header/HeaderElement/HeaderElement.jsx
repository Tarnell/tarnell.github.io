import React from 'react';
import PropTypes from 'prop-types';

import styles from './HeaderElement.module.scss';

const HeaderElement = ({ content, index, changePageFn }) => (
  <div
    className={styles.headerElement}
    role="button"
    tabIndex={index}
    onClick={() => changePageFn(content)}
    onKeyDown={() => changePageFn(content)}
  >
    <span
      className={styles.elementContent}
    >
      {content}
    </span>
  </div>
);

HeaderElement.propTypes = {
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  changePageFn: PropTypes.func.isRequired,
};

export default HeaderElement;
