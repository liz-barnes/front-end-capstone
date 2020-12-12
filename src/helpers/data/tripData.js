import axios from 'axios';
import firebaseConfig from '../fbApiKeys';

const baseUrl = firebaseConfig.databaseURL;

const getUserTrips = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/trips.json?orderBy="userId"&equalTo="${uid}"`).then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const getSingleTrip = (tripId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/trips/${tripId}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const createTrip = (object) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/trips.json`, object)
    .then((response) => {
      axios.patch(`${baseUrl}/trips/${response.data.name}.json`, { firebaseKey: response.data.name }).then(resolve);
    }).catch((error) => reject(error));
});

const updateTrip = (object) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/trips/${object.firebaseKey}.json`, object)
    .then(resolve).catch((error) => reject(error));
});

const deleteTrip = (tripId) => axios.delete(`${baseUrl}/trips/${tripId}.json`);

const getTripActivities = (tripId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/trip-activities.json?orderBy="tripId"&equalTo="${tripId}"`).then((response) => {
    resolve(Object.values(response.data));
    console.warn('trip values', Object.values(response.data));
  }).catch((error) => reject(error));
});

export {
  getUserTrips,
  getSingleTrip,
  createTrip,
  updateTrip,
  deleteTrip,
  getTripActivities,
};
