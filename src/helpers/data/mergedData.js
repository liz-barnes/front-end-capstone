import axios from 'axios';
import firebaseConfig from '../fbApiKeys';

const baseUrl = firebaseConfig.databaseURL;
// const key = apiKeys.apiKey;

const addTripActivity = (object) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/trip-activities.json`, object).then((response) => {
      const update = { firebaseKey: response.data.name };
      axios.patch(`${baseUrl}/user-trips/${response.data.name}.json`, update);
    }).catch((error) => reject(error));
});

export default addTripActivity;
