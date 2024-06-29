import { getPhotos } from 'apiService/photos';
import { Button, Form, Loader, PhotosGallery } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    setLoader(true);
    getPhotos(query, page)
      .then(({ photos, total_results }) => {
        setPictures(prevPhotos => {
          return [...prevPhotos, ...photos];
        });
        // setPictures([...pictures, ...photos]);
        setTotal(total_results);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoader(false));
  }, [query, page]);

  const onSubmit = data => {
    setQuery(data);
    setPage(1);
    setPictures([]);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const isButtonVisible = pictures.length > 0 && total > pictures.length;

  return (
    <>
      <Form onSubmit={onSubmit} />
      <PhotosGallery images={pictures} />
      {loader && <Loader />}
      {error && <p>{error}</p>}
      {isButtonVisible && <Button onClick={onLoadMore}>Load more</Button>}
    </>
  );
};
