import React, { Component } from 'react';
import DisplayNews from './components/displayNews';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/background';



function App() {

  return (
    <div className="app">
      <Header />
      <DisplayNews />
      <main>
        <Route exact path="/displayNews" render={() => <DisplayNews />} />

      </main>
    </div>
  );
}

export default App;