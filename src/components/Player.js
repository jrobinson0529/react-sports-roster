import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Player = ({ ...player }) => (
    <div className='m-2' style={{
      width: '12rem',
      height: '12rem'
    }}>
      <Card className='player-card' style={{
        width: '12rem',
        height: '12rem'
      }}>
        <CardBody className='bg-dark d-flex flex-column'>
          <CardTitle tag="h5">{player.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{player.position}</CardSubtitle>
          <div className='mt-auto'>
          <Button color='warning' onClick={() => console.warn('you clicked edit')} className='m-1'>Edit</Button>
          <Button color='danger' onClick={() => console.warn('you clicked delete')}>Delete</Button>
          </div>
        </CardBody>
      </Card>
    </div>);

export default Player;
