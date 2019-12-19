import React, { Component } from 'react';
import DisplayNews from './components/displayNews';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header';



function App() {

  return (
    <div className="app">
      <Header />
      <DisplayNews />
    </div>
  );
}


export default App;