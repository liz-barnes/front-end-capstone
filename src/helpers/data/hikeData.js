import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.databaseURL;
const key = apiKeys.apiKey;

const getParkHike = (parkCode) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/thingstodo?parkCode=${parkCode}&limit=5&api_key=${key}`).then((response) => {
    resolve((response.data.data));
    // console.warn('hikes', (response.data.data));
  });
});

const getSingleHike = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/thingstodo?id=${id}&api_key=${key}`).then((response) => {
    console.warn('API CALL HIKE', response.data.data);
    resolve(response.data.data);
    // resolve(response.status);
  }).catch((error) => reject(error));
});

export { getParkHike, getSingleHike };
