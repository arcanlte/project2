import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import UserProfile from './userProfile';
import './../App.css';
import NewsFeed from './newsfeed';


class DisplayNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          name: 'the-new-york-times',
          display: 'The New York Times',
          image: 'http://www.barbaraprey.com/wp/wp-content/uploads/2011/12/The-New-York-Times-icon.png',
          isClicked: false
        },
        {
          name: 'espn',
          display: 'ESPN',
          image: 'https://www.multichannel.com/.image/t_share/MTU0MDYzNjQ2MzI1NzQ0NzIy/espn-logojpg.jpg',
          isClicked: false
        },

        {
          name: 'cnn',
          display: 'CNN',
          image: 'https://www.logodesignlove.com/wp-content/uploads/2010/06/cnn-logo-white-on-red.jpg',
          isClicked: false
        },
        {
          name: 'engadget',
          display: 'engadget',
          image: 'http://icons.iconarchive.com/icons/martz90/hex/512/engadget-icon.png',
          isClicked: false
        },
        {
          name: 'cnbc',
          display: 'CNBC',
          image: 'https://www.udelv.com/wp-content/uploads/2018/01/logo-cnbc.png',
          isClicked: false
        },
        {
          name: 'al-jazeera-english',
          display: 'AlJazeera',
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/1200px-Aljazeera_eng.svg.png',
          isClicked: false
        }
      ],
      user: [{
        articleName: [],
        chosenArticles: [],
        isLoggedIn: ''
      }],
      articles: [],
      backgroundImages: [],
      isLoggedIn: true,
      newArticleName: []
    }
  }


  componentDidMount(e) {
    console.log("I AM HEREEEE!")
    const newArticle = this.state.articles;
    const displayName = this.state.newArticleName;
    const willBeLoggedIn = this.state.isLoggedIn
    const accessUser = this.state.user;
    accessUser.chosenArticles = newArticle;
    accessUser.isLoggedIn = willBeLoggedIn;
    accessUser.articleName = displayName;
    console.log(this.props.articleName)
    const updatedUser = { ...accessUser, chosenArticles: newArticle }
    this.setState({
      user: updatedUser
    })
    this.setState({
      user: { ...accessUser, articleName: displayName }
    })
    this.setState({
      user: { ...accessUser, isLoggedIn: willBeLoggedIn }
    })
    console.log(this.state.user)

  }



  render() {
    return (
      <div className="boxContainer">
        <Link to="/the-new-york-times">The New York Times</Link>
        <Link to="/cnn">CNN</Link>
        <Link to="/engadget">ENGADGET</Link>
        <Link to="/cnbc">CNBC</Link>
        <Link to="/al-jazeera-english">AlJazeera</Link>
      </div>
    )
  }
}

export default DisplayNews;


