/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import React, { useReducer, useRef } from 'react';

import { useFetchNextAvailableAssets, useInfiniteScroll, useLazyLoading } from 'app/Hooks/customHooks';
import GalleryItem from './GalleryItem/GalleryItem';

import styles from './Gallery.module.scss';

const Gallery = () => {
  const imgReducer = (state, action) => {
    switch (action.type) {
      case 'STACK_IMAGES':
        return { ...state, images: state.images.concat(action.images) };
      case 'FETCHING_IMAGES':
        return { ...state, fetching: action.fetching };
      default:
        return state;
    }
  };

  const pageReducer = (state, action) => {
    switch (action.type) {
      case 'ADVANCE_PAGE':
        return { ...state, page: state.page + 1 };
      default:
        return state;
    }
  };

  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0, limit: 5 });
  const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true });

  const bottomBoundaryRef = useRef(null);

  useFetchNextAvailableAssets(pager, imgDispatch);
  useLazyLoading('.card-img-top', imgData.images);
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

  return (
    <div className={styles.gallery}>
      <div id="images" className="container">
        {imgData.fetching && (
        <div className={styles.copyFromServer}>
          <p>Getting images</p>
        </div>
        )}
        <div id="page-bottom-boundary" style={{ border: '1px solid red' }} ref={bottomBoundaryRef} />
        <div className={styles.copyFromServer}>
          {imgData.images.map((image) => {
            const { assetId } = image;
            return typeof assetId !== 'undefined' && (
              <GalleryItem key={assetId} {...{ assetId }} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

{ /* <div className={styles.gallery}>
<div className={styles.intro}>
  <span>{useDictionary('gallery_intro')}</span>
</div>
<div className={styles.imageContainer}>
  <ImageContainer />
</div>
<div className={styles.copyFromServer}>
  {imgData.images.map((image) => {
    const { author, download_url } = image;

    return (
      <img
        alt={author}
        src={download_url}
      />
    );
  })}
  ;
</div>
{/* { getImages() } */ }
