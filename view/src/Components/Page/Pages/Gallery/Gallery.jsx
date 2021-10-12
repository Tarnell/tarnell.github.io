import React from 'react';
import useDictionary from 'app/Hooks/useDictionary';
import { ImageContainer } from 'app/Components';
import styles from './Gallery.module.scss';

const Gallery = () => (
  <div className={styles.gallery}>
    <div className={styles.intro}>
      <span>{useDictionary('gallery_intro')}</span>
    </div>
    <div className={styles.imageContainer}>
      <ImageContainer />
    </div>
  </div>
);

export default Gallery;
