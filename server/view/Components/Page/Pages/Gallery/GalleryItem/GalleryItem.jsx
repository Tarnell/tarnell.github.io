import React, { useEffect, useState } from 'react';
import { useFetchAsset } from 'app/Hooks/customHooks';
import PropTypes from 'prop-types';

import styles from './GalleryItem.module.scss';

const GalleryItem = ({ assetId, focusIndex, focusImageCallback }) => {
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    useFetchAsset(assetId).then((res) => {
      setImage(res);
      setLoaded(true);
    });
  }, [assetId]);

  const focusImage = () => {
    focusImageCallback(image);
  };

  return (loaded ? (
    <div
      className={styles.galleryItemContainer}
      role="button"
      tabIndex={focusIndex}
      onClick={focusImage}
      onKeyPress={focusImage}
    >
      <img
        className={`${styles.galleryItem} card-img-top`}
        key={assetId}
        src={image}
        alt="Engagement"
      />
    </div>

  ) : (
    <div className={styles.galleryItemContainer} key={assetId} />
  ));
};

GalleryItem.propTypes = {
  assetId: PropTypes.string.isRequired,
  focusIndex: PropTypes.number.isRequired,
  focusImageCallback: PropTypes.func.isRequired,
};

export default GalleryItem;
