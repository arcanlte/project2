import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import DisplayNews from './displayNews';
import App from './../App.js'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    }
  }





  render() {
    return (
      <div className="header">
        <Link to="/displayNews">
          JOE HEADLINES
        </Link>
        <Route
          path="/displayNews"
          render={
            () => {
              return (
                <DisplayNews
                  value={this.state.value} />
              )
            }
          }
        />


      </div>
    )
  }
}

export default Header;