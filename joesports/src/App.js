import React from 'react';
import DisplayNews from './components/displayNews';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header';



function App() {

  return (
    <div className="app">
      <DisplayNews />
      <Link to="/">
        <li>home</li>
      </Link>
      <Route exact path="/displayNews" component={DisplayNews} />

    </div>
  );
}


export default App;