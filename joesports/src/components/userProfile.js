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
    const newArticle = this.props.articles;
    const displayName = this.props.articleName;
    const willBeLoggedIn = this.props.isLoggedIn
    const accessUser = this.state.user;
    accessUser.chosenArticles = newArticle;
    accessUser.isLoggedIn = willBeLoggedIn;
    accessUser.articleName = displayName;
    const updatedUser = { ...accessUser, chosenArticles: newArticle }
    this.setState({
      user: updatedUser
    })
    this.setState({
      user: { ...accessUser, articleName: displayName }
    })
    this.setState({
      user: { ...accessUser, articleName: willBeLoggedIn }
    })


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




// onSubmit = (e) => {
//   console.log("THIS IS A CHOSEN ARTICLE")
//   const newArticle = this.props.articles;
//   const accessUser = this.state.user;
//   accessUser.chosenArticles = newArticle;
//   const updatedUser = { ...accessUser, chosenArticles: newArticle }

//   this.setState({
//     user: updatedUser
//   })
//   console.log(this.state.user.chosenArticles)


//{this.state.user.chosenArticles && this.state.user.chosenArticles.map(article => <p>{article.title}</p>)}
// }

