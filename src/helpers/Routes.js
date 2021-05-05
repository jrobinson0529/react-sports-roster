import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import About from '../views/About';
import Users from '../views/Users';
import { NoAuthRoute, PrivateRoute } from './PrivateRoute';
import Home from '../views/Home';
import AuthPage from '../views/AuthPage';

function Routes({ user, time }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => (!user ? <Redirect to="/auth" /> : <Redirect to='/home' />) } />
        <NoAuthRoute exact path="/auth" component={() => <AuthPage />} user={user}/>
        <PrivateRoute exact path="/home" component={() => <Home user={user} time={time}/>} user={user}/>
        <PrivateRoute exact path="/about" component={() => <About user={user} />} user={user}/>
        <PrivateRoute exact path="/users" component={() => <Users user={user} />} user={user}/>
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
  time: PropTypes.string,
};
export default Routes;
