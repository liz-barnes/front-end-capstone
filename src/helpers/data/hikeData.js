import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.databaseURL;
const key = apiKeys.apiKey;
const hikeId = 'BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA';

const getParkHike = (parkCode) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/thingstodo?parkCode=${parkCode}&q=${hikeId}&limit=5&api_key=${key}`).then((response) => {
    console.warn('hike park', response);
    resolve((response.data.data));
  });
});

const getSingleHike = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/thingstodo?id=${id}&api_key=${key}`).then((response) => {
    resolve(response.data.data);
  }).catch((error) => reject(error));
});

export { getParkHike, getSingleHike };
