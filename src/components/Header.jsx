import React from 'react';
import { Link } from 'react-router-dom';
import epicodusLogo from '../assets/images/epicodus.jpg';

function Header(){
  return(
    <div>
      <img src={epicodusLogo} />
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
