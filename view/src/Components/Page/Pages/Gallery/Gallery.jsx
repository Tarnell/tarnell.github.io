import React, { useEffect, useState } from 'react';
import useDictionary from 'app/Hooks/useDictionary';
import { ImageContainer } from 'app/Components';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchApi = async () => {
    const response = await fetch('/api/hello', {
      headers: {
        accepts: 'application/json',
      },
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  useEffect(() => {
    fetchApi()
      .then((res) => {
        setServerMessage(res.message);
      })
      .catch((err) => console.log(err));
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
        <span>{serverMessage}</span>
      </div>
    </div>
  );
};

export default Gallery;
