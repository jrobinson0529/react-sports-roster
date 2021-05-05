import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { createPlayer } from '../helpers/data/playerData';

function PlayerForm({
  formTitle, setTeam, user, ...playerObject
}) {
  const [player, setPlayer] = useState({
    id: playerObject?.id || null,
    name: playerObject?.name || '',
    position: playerObject?.position || '',
    uid: playerObject?.uid || user.uid,
    imageURL: playerObject?.imageURL || ''
  });
  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createPlayer(player, user.uid).then((response) => setTeam(response));
  };
  return (
    <>
      <Form style={{
        backgroundColor: '#343a40',
        padding: '1em',
        zIndex: '1',
      }} onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" onChange={handleInputChange} value={player.name} placeholder="Enter player name..." />
        </FormGroup>
        <FormGroup>
          <Label for="url">Image</Label>
          <Input type="url" name="imageURL" id="url" value={player.imageURL} onChange={handleInputChange} placeholder="Enter url..." />
        </FormGroup>
        <FormGroup>
        <Label for="position">Position</Label>
        <Input type="select" name="position" id="position" onChange={handleInputChange} value={player.position}>
          <option value=''>Select Position</option>
          <option>Center</option>
          <option>Forward</option>
          <option>Point Guard</option>
          <option>Shooting Guard</option>
        </Input>
      </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  );
}
PlayerForm.propTypes = {
  formTitle: PropTypes.string,
  setTeam: PropTypes.func,
  user: PropTypes.object,
};
export default PlayerForm;
