import React, { Component } from 'react';
import DisplayNews from './displayNews';
import { Route } from 'react-router-dom';
import NewsFeed from './newsfeed';



class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [{
        articleName: [],
        chosenArticles: [],
        isLoggedIn: ''
      }]
    }
  }




  componentDidMount(e) {
    console.log("I AM HEREEEE!")
    const newArticle = this.props.articles;
    const displayName = this.props.articleName;
    const willBeLoggedIn = this.props.isLoggedIn
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
      <div>
          <NewsFeed
            chosenArticles={this.state.user.chosenArticles}
            articleName={this.state.user.articleName}
            isLoggedIn={this.state.user.isLoggedIn}
          />
       
      </div>

    )
  }
}

export default UserProfile;