import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.databaseURL;
const key = apiKeys.apiKey;

const getParkData = () => new Promise((resolve, reject) => {
  console.warn('park');
  axios.get(`${baseUrl}/parks?limit=1&api_key=${key}`).then((response) => {
    if (response.status === 200) {
      resolve((response.data.data));
    }
  }).catch((error) => reject(error));
});

export default getParkData;
