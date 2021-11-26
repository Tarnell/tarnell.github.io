import React from 'react';
import PropTypes from 'prop-types';
import styles from './FocusFrame.module.scss';

const FocusFrame = ({ image, unFocusCallback }) => (
  <div className={styles.focusFrameContainer}>
    <div
      className={styles.focusFrame}
      tabIndex={0}
      role="button"
      onClick={unFocusCallback}
      onKeyDown={unFocusCallback}
    >
      <img className={styles.focusFrameItem} src={image} alt="test" />
    </div>
  </div>

);

FocusFrame.propTypes = {
  image: PropTypes.string.isRequired,
  unFocusCallback: PropTypes.func.isRequired,
};

export default FocusFrame;
