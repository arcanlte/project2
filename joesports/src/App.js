import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Background from './components/background';
import Footer from './components/footer'

import CNN from './components/cnn';
import ESPN from './components/espn';
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
        <Route exact path="/espn" render={() => <ESPN />} />
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