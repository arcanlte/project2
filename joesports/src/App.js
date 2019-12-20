import React, { Component } from 'react';
import DisplayNews from './components/displayNews';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Background from './components/background';
import Footer from './components/footer'
import UserProfile from './components/userProfile'
import NewsFeed from './components/newsfeed';

import CNN from './components/cnn';
import TheNewYorkTimes from './components/the-new-york-times';
import Engadget from './components/engadget';
import CNBC from './components/cnbc';
import AlJazeera from './components/al-jazeera-english';




function App() {

  return (
    <div className="app">
      <Header />
      <Background />
    
      <main className="optionContainer">
      <Route exact path="/" render={() => <CNN />} />
        <Route exact path="/the-new-york-times" render={() => <TheNewYorkTimes />} />
        <Route exact path="/cnn" render={() => <CNN />} />
        <Route exact path="/engadget" render={() => <Engadget />} />
        <Route exact path="/cnbc" render={() => <CNBC />} />
        <Route exact path="/al-jazeera-english" render={() => <AlJazeera />} />
      </main>
      <Footer />
    </div>
  );
}

export default App;