import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '37740563-d8bfde705cf6e45a783b46982';

export const fetchImages = async (value, page) => {
  const params = {
    key: apiKey,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: page,
  };
  try {
    const response = await axios.get('', { params });
    return response.data.hits;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
