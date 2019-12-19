import React from 'react';
import { Route, Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/displayNews">
        JOE HEADLINES
      </Link>
    </div>
  )
}

export default Header;