import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PlayerForm from './PlayerForm';
import { deletePlayer } from '../helpers/data/playerData';

const Player = ({ uid, setTeam, ...playerObject }) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(playerObject.id, uid).then(setTeam);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
    }
  };
  return (
    <div className='m-2' style={{
      width: '12rem',
      height: '12rem',
    }}>
      <Card className='player-card' style={{
        width: '12rem',
        minHeight: '12rem',
        height: 'auto',
      }}>
        <CardBody className='bg-dark d-flex flex-column' style={{ backgroundImage: `url(${playerObject.imageURL})`, backgroundPosition: 'center' }}>
          <CardTitle tag="h5">{playerObject.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{playerObject.position}</CardSubtitle>
          <div className='mt-auto'>
          <Button color='warning' onClick={() => handleClick('edit')} className='m-1'>Edit</Button>
          <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
          </div>
        </CardBody>
        { editing && <PlayerForm formTitle={'Edit player form'} {...playerObject} uid={uid} setTeam={setTeam}/>
        }
      </Card>
    </div>);
};
Player.propTypes = {
  uid: PropTypes.string,
  setTeam: PropTypes.func,
};
export default Player;
