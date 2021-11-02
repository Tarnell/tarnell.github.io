import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './GalleryItem.module.scss';

const fetchImage = async (asset) => {
  try {
    const response = await fetch(`api/getImages?asset=${asset}`, {
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

const GalleryItem = ({ assetNumber }) => {
  const [loaded, setLoaded] = useState(false);
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const imagesFromServer = [];
      const [response, error] = await fetchImage(assetNumber);
      if (error) {
        console.log(error);
      } else {
        console.log(`got response ${response}`);
        imagesFromServer.push(response);
      }
      return imagesFromServer;
    }

    fetchData().then((res) => {
      setImage(res);
      setLoaded(true);
    });
  }, [assetNumber]);

  return loaded && (
    <img className={styles.galleryItem} src={image} alt="test" />
  );
};

GalleryItem.propTypes = {
  assetNumber: PropTypes.number.isRequired,
};

export default GalleryItem;
