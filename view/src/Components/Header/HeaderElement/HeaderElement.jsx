import React from 'react';
import PropTypes from 'prop-types';

import styles from './HeaderElement.module.scss';

const HeaderElement = ({
  content, selectedPage, index, changePageFn,
}) => {
  const isSelected = index === selectedPage;
  return (
    <div
      className={isSelected ? styles.selectedElement : styles.unselectedElement}
      role="button"
      tabIndex={index}
      onClick={() => changePageFn(index)}
      onKeyDown={() => changePageFn(index)}
    >
      <span
        className={styles.elementContent}
      >
        {content}
      </span>
    </div>
  );
};

HeaderElement.propTypes = {
  content: PropTypes.string.isRequired,
  selectedPage: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  changePageFn: PropTypes.func.isRequired,
};

export default HeaderElement;
