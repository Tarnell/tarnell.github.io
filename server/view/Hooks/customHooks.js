import { useEffect, useCallback, useRef } from 'react';

export const useFetchAsset = async (assetId) => {
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
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error(`getImages: error occurred ${error}`);
    return error;
  }
};

// make API calls and pass the returned data via dispatch
export const useFetchNextAvailableAssets = (data, dispatch) => {
  useEffect(() => {
    dispatch({ type: 'FETCHING_IMAGES', fetching: true });
    fetch(`/api/getImages?page=${data.page}&limit=${data.limit}`)
      .then((res) => res.json())
      .then((images) => {
        dispatch({ type: 'STACK_IMAGES', images });
        dispatch({ type: 'FETCHING_IMAGES', fetching: false });
      })
      .catch((e) => {
        dispatch({ type: 'FETCHING_IMAGES', fetching: false });
        return e;
      });
  }, [dispatch, data.page]);
};

export const useInfiniteScroll = (scrollRef, dispatch) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: 'ADVANCE_PAGE' });
          }
        });
      }).observe(node);
    },
    [dispatch],
  );
  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};

// lazy load images with intersection observer
export const useLazyLoading = (imgSelector, items) => {
  const imgObserver = useCallback((node) => {
    const intObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.intersectionRatio > 0) {
          const currentImg = en.target;
          const newImgSrc = currentImg.dataset.src;
          // only swap out the image source if the new url exists
          if (!newImgSrc) {
            console.error('Image source is invalid');
          } else {
            currentImg.src = newImgSrc;
          }
          intObs.unobserve(node); // detach the observer when done
        }
      });
    });
    intObs.observe(node);
  }, []);
  const imagesRef = useRef(null);
  useEffect(() => {
    imagesRef.current = document.querySelectorAll(imgSelector);
    if (imagesRef.current) {
      imagesRef.current.forEach((img) => imgObserver(img));
    }
  }, [imgObserver, imagesRef, imgSelector, items]);
};
