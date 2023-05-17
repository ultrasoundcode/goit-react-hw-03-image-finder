import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '34722536-bec3ddb016f82f379d3e29af6';

function fetchImages(query, page) {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios.get(url).then(response => response.data.hits);
}

export { fetchImages };
