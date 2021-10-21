import React from 'react';

import useDictionary from 'app/Hooks/useDictionary';
import { ImageContainer } from 'app/Components';

import GalleryItem from './GalleryItem/GalleryItem';

import styles from './Gallery.module.scss';

// const getImages = () => {
//   const NUMBER_OF_IMAGES = 7;
//   let images;

//   for (let i = 0; i <= NUMBER_OF_IMAGES - 1; i += 1) {
//     images += <GalleryItem assetNumber={i} />;
//   }

//   return images;
// };

const Gallery = () => (
  <div className={styles.gallery}>
    <div className={styles.intro}>
      <span>{useDictionary('gallery_intro')}</span>
    </div>
    <div className={styles.imageContainer}>
      <ImageContainer />
    </div>
    <div className={styles.copyFromServer}>
      <GalleryItem assetNumber={0} />
      <GalleryItem assetNumber={1} />
      <GalleryItem assetNumber={2} />
      <GalleryItem assetNumber={3} />
    </div>
  </div>
);

export default Gallery;
