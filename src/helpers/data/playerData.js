import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;
const getUserPlayers = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
const createPlayer = (playerObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/players.json`, playerObject)
    .then((response) => {
      const body = { id: response.data.name };
      axios.patch(`${dbURL}/players/${response.data.name}.json`, body)
        .then(() => getUserPlayers(uid).then(resolve));
    }).catch((error) => reject(error));
});
const deletePlayer = (id, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/players/${id}.json`)
    .then(() => getUserPlayers(uid).then(resolve))
    .catch((error) => reject(error));
});
const updatePlayer = (id, uid, playerObject) => new Promise((resolve, reject) => {
  axios.put(`${dbURL}/players/${id}.json`, playerObject)
    .then(() => getUserPlayers(uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  createPlayer, getUserPlayers, deletePlayer, updatePlayer
};
