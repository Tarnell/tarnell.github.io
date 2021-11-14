import React from 'react';

import CatWithFriend from './images/cat_with_friend_sm.jpg';
import ExistentialCrisisCat from './images/existential_crisis_cat_sm.jpg';
import SpookedCat from './images/spooked_cat_sm.jpg';

import styles from './ImageContainer.module.scss';

// const TOTAL_ASSETS = 50;

const ImageContainer = () => (
  <div className={styles.imageContainer}>
    <img className={styles.image} src={CatWithFriend} alt="cat has friend" />
    <img className={styles.image} src={ExistentialCrisisCat} alt="cat has existential crisis" />
    <img className={styles.image} src={SpookedCat} alt="cat has gotten spooked by something offscreen - clearly of interest" />
  </div>
);

export default ImageContainer;
