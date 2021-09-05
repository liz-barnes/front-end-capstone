import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.databaseURL;
const key = apiKeys.apiKey;

const getParkData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/parks?limit=500&api_key=${key}`).then((response) => {
    if (response.status === 200) {
      // resolve((response.data.data));
    }
  }).catch((error) => reject(error));
});

const getSinglePark = (parkId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/parks?q=${parkId}&limit=5&api_key=${key}`).then((response) => {
    resolve(response.data.data[0]);
    resolve(response.status);
  }).catch((error) => reject(error));
});

const getCampgroundData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/campgrounds?limit=5&api_key=${key}`).then((response) => {
    resolve((response.data.data));
  });
});

const getHikeData = (parkCode) => new Promise((resolve, reject) => {
  // axios.get(`${baseUrl}/thingstodo?parkCode=${parkCode}&limit=5&api_key=${key}`).then((response) => {
  //   resolve((response.data.data));
  // });
});

export default {
  getParkData,
  getSinglePark,
  getCampgroundData,
  getHikeData,
};
