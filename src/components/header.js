import PropTypes from 'prop-types';
import React from 'react';
import Button from './button';
import { useLocation } from 'react-router-dom';

const Header = ({press,openClose}) => {
  const location = useLocation()
  return (
    <div className="header">
      <h1>Task Manager</h1>
      {location.pathname === '/' && 
      (<Button 
      color={openClose ? 'red' : 'green'} 
      text={openClose ? 'Close' : 'add'} 
      onClick={press}/>)}
    </div>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

