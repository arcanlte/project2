import React, { Component } from 'react';
import DisplayNews from './components/displayNews';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Background from './components/background';
import Footer from './components/footer'



function App() {

  return (
    <div className="app">
      <Header />
      <Background />

      <DisplayNews />
      <main>
        <Route exact path="/displayNews" render={() => <DisplayNews />} />
      </main>
      <Footer />
    </div>
  );
}

export default App;