import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { getUserPlayers } from '../helpers/data/playerData';
import Player from './Player';
import PlayerForm from './PlayerForm';

function Team({ user }) {
  const [team, setTeam] = useState([]);
  const [adding, setAdding] = useState(false);
  const handleClick = () => {
    setAdding((prevState) => !prevState);
  };
  useEffect(() => {
    getUserPlayers(user.uid).then((response) => setTeam(response));
  }, []);
  return (
    <div className='d-flex flex-wrap p-3 justify-content-center'>
      <Button color='info' onClick={handleClick}>Add New Player</Button>
      { adding && <PlayerForm formTitle={'Add player form'} setTeam={setTeam} user={user}/>}
      <div className='team-container d-flex flex-wrap p-3'>
      {team.map((player) => <Player key={player.id} {...player}/>)}
      </div>
    </div>
  );
}
Team.propTypes = {
  user: PropTypes.any
};

export default Team;
