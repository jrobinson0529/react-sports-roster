import React, { useState } from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PlayerForm from './PlayerForm';

const Player = ({ ...playerObject }) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        console.warn('you clicked delete');
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
        { editing && <PlayerForm formTitle={'Edit player form'} {...playerObject}/>
        }
      </Card>
    </div>);
};
export default Player;
