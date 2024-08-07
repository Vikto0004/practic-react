import axios from 'axios';

const API_KEY = 'T6jgYdgwVxuPDY1COMdFjdVAAQmRGQ13TYFImiCFEZqSWck9Bn5KNbPI';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};
