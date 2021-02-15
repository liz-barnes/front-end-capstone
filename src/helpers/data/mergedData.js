import axios from 'axios';
import firebaseConfig from '../fbApiKeys';

const baseUrl = firebaseConfig.databaseURL;

const addTripActivity = (object) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/trip-activities.json`, object).then((response) => {
      const update = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/trip-activities/${response.data.name}.json`, update);
    }).catch((error) => reject(error));
});

const getTripActivity = (tripId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/trip-activities.json?orderBy="tripId"&equalTo="${tripId}"`).then((resp) => {
    resolve(Object.values(resp.data));
  }).catch((error) => reject(error));
});

const getActivityTrip = (parkId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/trip-activities.json?orderBy="parkId"&equalTo="${parkId}"`).then((resp) => {
    resolve(Object.values(resp.data));
  }).catch((error) => reject(error));
});

const removeTripActivities = (firebaseKey) => axios.delete(`${baseUrl}/trip-activities/${firebaseKey}.json`);

export {
  addTripActivity,
  getTripActivity,
  getActivityTrip,
  removeTripActivities,
};
