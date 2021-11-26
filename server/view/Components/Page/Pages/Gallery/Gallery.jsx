import React, { useReducer, useRef, useState } from 'react';

import { useFetchNextAvailableAssets, useInfiniteScroll } from 'app/Hooks/customHooks';
import FocusFrame from './FocusFrame/FocusFrame';
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
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

  const [focusedImage, setFocusedImage] = useState(null);

  return (
    <div
      className={styles.gallery}
    >
      { focusedImage && (
        <FocusFrame
          image={focusedImage}
          unFocusCallback={() => setFocusedImage(null)}
        />
      )}
      <div className={styles.container}>
        <div className={styles.copyFromServer}>
          {imgData.images.map((image, index) => {
            const { assetId } = image;
            return typeof assetId !== 'undefined' && (
              <GalleryItem
                key={assetId}
                {...{ assetId }}
                focusIndex={index}
                focusImageCallback={setFocusedImage}
              />
            );
          })}
        </div>
        <div id="page-bottom-boundary" ref={bottomBoundaryRef} />
      </div>
    </div>
  );
};

export default Gallery;
