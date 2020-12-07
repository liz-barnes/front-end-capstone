import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.databaseURL;
const key = apiKeys.apiKey;
const parkCode = 'shen';

const getParkData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/parks?limit=5&api_key=${key}`).then((response) => {
    resolve((response.data.data));
    // console.warn('parks', (response.data.data));
  });
});

const getCampgroundData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/campgrounds?limit=5&api_key=${key}`).then((response) => {
    resolve((response.data.data));
    // console.warn('camps', (response.data.data));
  });
});

const getHikeData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/thingstodo?parkCode=${parkCode}&limit=5&api_key=${key}`).then((response) => {
    resolve((response.data.data));
    // console.warn('hikes', (response.data.data));
  });
});

export { getParkData, getCampgroundData, getHikeData };
