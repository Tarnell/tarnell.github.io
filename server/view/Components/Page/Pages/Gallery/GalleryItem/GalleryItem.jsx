import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './GalleryItem.module.scss';

const fetchImage = async (assetId) => {
  try {
    const response = await fetch(`api/getImage?assetId=${assetId}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const blob = await response.blob();
    return [URL.createObjectURL(blob), null];
  } catch (error) {
    console.error(`getImages: error occurred ${error}`);
    return [null, error];
  }
};

const GalleryItem = ({ assetId }) => {
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [response] = await fetchImage(assetId);

      return response;
    }

    fetchData().then((res) => {
      setImage(res);
      setLoaded(true);
    });
  }, [assetId]);

  return loaded && (
    <img className={`${styles.galleryItem} card-img-top`} key={assetId} src={image} alt="test" />
  );
};

GalleryItem.propTypes = {
  assetId: PropTypes.string.isRequired,
};

export default GalleryItem;
