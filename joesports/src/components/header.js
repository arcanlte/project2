import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/" >
        <p className="greetings">NEWS HEADLINE</p>
      </Link>
    </div>
  )
}

export default Header;
