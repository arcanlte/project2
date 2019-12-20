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



function App() {

  return (
    <div className="app">
      <CNN />
      <Header />
      <Background />
      <main>
        <Route exact path="/" render={() => <DisplayNews />} />
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