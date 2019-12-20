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
      <DisplayNews />
      <main>
        <Route path="/displayNews" render={() => <DisplayNews />} />
        <Route path="/page" Component={Page} />
      </main>
    </div>
  );
}

export default App;