import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;
const getUserPlayers = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getUserPlayers;
