import { getPhotos } from 'apiService/photos';
import { Form } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;
    getPhotos(query, page).then(({ photos, total_results }) => {
      setPictures(photos);
      setTotal(total_results);
    });
  }, [query, page]);

  const onSubmit = data => {
    setQuery(data);
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
    </>
  );
};
