import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

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