import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { signInUser } from '../helpers/auth';

function AuthPage({ user }) {
  return (
    <>
      <h1 className='my-5'>{ user !== null && <Button color='info' onClick={signInUser} className='login-btn'>Log in</Button>} to view the site!</h1>
    </>
  );
}
AuthPage.propTypes = {
  user: PropTypes.any
};

export default AuthPage;
