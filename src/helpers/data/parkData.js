import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.databaseURL;
const key = apiKeys.apiKey;

const getParkData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/parks?limit=5&api_key=${key}`).then((response) => {
    resolve((response.data.data));
    console.warn('parks', (response.data.data));
  });
});

const getCampgroundData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/campgrounds?api_key=${key}`).then((response) => console.warn(response));
});

export { getParkData, getCampgroundData };
