/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import React, { useReducer, useRef } from 'react';

import { useFetch, useInfiniteScroll, useLazyLoading } from 'app/Hooks/customHooks';

// import useDictionary from 'app/Hooks/useDictionary';
// import { ImageContainer } from 'app/Components';

// import GalleryItem from './GalleryItem/GalleryItem';

// import styles from './Gallery.module.scss';

// const getImages = () => {
//   const NUMBER_OF_IMAGES = 25;
//   const images = [];

//   for (let i = 0; i <= NUMBER_OF_IMAGES - 1; i += 1) {
//     images.push(<GalleryItem assetNumber={i} />);
//   }

//   return (
//     <div className={styles.copyFromServer}>
//       {images}
//     </div>
//   );
// };

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

  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 });
  const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true });

  const bottomBoundaryRef = useRef(null);

  useFetch(pager, imgDispatch);
  useLazyLoading('.card-img-top', imgData.images);
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

  return (
    <div className="">
      <nav className="navbar bg-light">
        <div className="container">
          <a className="navbar-brand" href="/#">
            <h2>Infinite scroll + image lazy loading</h2>
          </a>
        </div>
      </nav>
      <div id="images" className="container">
        {imgData.fetching && (
        <div className="text-center bg-secondary m-auto p-3">
          <p className="m-0 text-white">Getting images</p>
        </div>
        )}
        <div id="page-bottom-boundary" style={{ border: '1px solid red' }} ref={bottomBoundaryRef} />
        <div className="row">
          {imgData.images.map((image) => {
            const { author, download_url } = image;
            return (
              <div className="card">
                <div className="card-body ">
                  <img
                    alt={author}
                    data-src={download_url}
                    className="card-img-top"
                    src="https://picsum.photos/id/870/300/300?grayscale&blur=2"
                  />
                </div>
                <div className="card-footer">
                  <p className="card-text text-center text-capitalize text-primary">
                    Shot by:
                    {' '}
                    {author}
                  </p>
                </div>
              </div>
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
