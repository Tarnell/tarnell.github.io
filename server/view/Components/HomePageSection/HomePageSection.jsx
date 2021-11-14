import React from 'react';
import PropTypes from 'prop-types';
import useDictionary from 'app/Hooks/useDictionary';

import styles from './HomePageSection.module.scss';

const HomePageSection = ({
  image, imageAltText, imageOnRight, sectionHeading, sectionContent,
}) => (
  <div className={imageOnRight ? styles.sectionWithImageOnRight : styles.sectionWithImageOnLeft}>
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={image} alt={imageAltText} />
    </div>
    <div className={styles.contentWrapper}>
      <span className={styles.header}>{useDictionary(sectionHeading)}</span>
      <span className={styles.content}>{useDictionary(sectionContent)}</span>
    </div>
  </div>
);

HomePageSection.propTypes = {
  image: PropTypes.string.isRequired,
  imageAltText: PropTypes.string,
  imageOnRight: PropTypes.bool,
  sectionHeading: PropTypes.string.isRequired,
  sectionContent: PropTypes.string.isRequired,
};

HomePageSection.defaultProps = {
  imageAltText: '',
  imageOnRight: false,
};

export default HomePageSection;
