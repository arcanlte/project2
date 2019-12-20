import React, { Component } from 'react';
import DisplayNews from './components/displayNews';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Page from './components/page';



function App() {

  return (
    <div className="app">
      <Header />
      <Route path="/page" Component={Page} />
      <DisplayNews />
      <main>
        <Route exact path="/displayNews" render={() => <DisplayNews />} />

      </main>
    </div>
  );
}

export default App;