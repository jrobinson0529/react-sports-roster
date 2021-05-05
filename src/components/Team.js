import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getUserPlayers from '../helpers/data/playerData';
import Player from './Player';

function Team({ user }) {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    getUserPlayers(user.uid).then((response) => setTeam(Object.values(response)));
  }, []);
  return (
    <div className='team-container d-flex flex-wrap p-3'>
      {team.map((player) => <Player key={player.id} {...player}/>)}
    </div>
  );
}
Team.propTypes = {
  user: PropTypes.any
};

export default Team;
