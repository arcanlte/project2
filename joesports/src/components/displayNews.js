import React from 'react';
import { Link} from 'react-router-dom';
import './../App.css';


function DisplayNews() {

  return (
    <div className="boxContainer">
      <Link to="/cnn"><span className="cnn">CNN</span></Link>
      <Link to="/engadget"><span className="engadget">ENGADGET</span></Link>
      <Link to="/cnbc"><span className="cnbc">CNBC</span></Link>
      <Link to="/al-jazeera-english"><span className="aljazeera">AlJazeera</span></Link>
      <Link to="/espn"><span className="espn">ESPN</span></Link>
    </div>
  )

}

export default DisplayNews;


