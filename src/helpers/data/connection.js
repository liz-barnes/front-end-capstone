import firebase from 'firebase/app';
import firebaseConfig from '../fbApiKeys';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export default firebaseApp;
