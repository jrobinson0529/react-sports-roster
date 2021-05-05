import React from 'react';
import PropTypes from 'prop-types';
import Team from '../components/Team';

function Home({ user }) {
  return (
    <div className='p-3'>
      <h1>Hello, {user.fullName} welcome to your Sports roster</h1>
      <hr className='bg-light'/>
      <Team user={user}/>
    </div>
  );
}
Home.propTypes = {
  user: PropTypes.any
};

export default Home;
