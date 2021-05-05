import React from 'react';
import PropTypes from 'prop-types';

function Home({ user }) {
  return (
    <>
      <h1>Hello, {user.fullName} welcome to your Sports roster</h1>
    </>
  );
}
Home.propTypes = {
  user: PropTypes.any
};

export default Home;
