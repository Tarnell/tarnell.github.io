import React, { useEffect, useState } from 'react';

// import { Buffer } from 'buffer';
import useDictionary from 'app/Hooks/useDictionary';
import { ImageContainer } from 'app/Components';
import styles from './Gallery.module.scss';

const fetchImage = async () => {
  try {
    const response = await fetch('api/getImages', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });
    const blob = await response.blob();
    return [URL.createObjectURL(blob), null];
  } catch (error) {
    console.error(`getImages: error occurred ${error}`);
    return [null, error];
  }
};

const Gallery = () => {
  const [image1, setImage1] = useState(undefined);
  const [image2, setImage2] = useState(undefined);
  const [image3, setImage3] = useState(undefined);
  const [image4, setImage4] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const [response, error] = await fetchImage();
      if (error) {
        console.log(error);
      } else {
        debugger;
        console.log(`got response ${response}`);
        setImage1(response);
        setImage2(response);
        setImage3(response);
        setImage4(response);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.gallery}>
      <div className={styles.intro}>
        <span>{useDictionary('gallery_intro')}</span>
      </div>
      <div className={styles.imageContainer}>
        <ImageContainer />
      </div>
      <div className={styles.copyFromServer}>
        <img src={image1} alt="test" />
        <img src={image2} alt="test" />
        <img src={image3} alt="test" />
        <img src={image4} alt="test" />
      </div>
    </div>
  );
};

export default Gallery;
