import React, { Component } from 'react';
import DisplayNews from './displayNews';
import Profile from './profile';
import { Route } from 'react-router-dom';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [{
        avatarname: '',
        chosenArticles: '',
        avarphoto: ''
      }],
      apiDataLoaded: false
    }
  }




  componentDidMount(e) {
    console.log("THIS IS A CHOSEN ARTICLE")
    const newArticle = this.props.articles;
    const accessUser = this.state.user;
    accessUser.chosenArticles = newArticle;
    const updatedUser = { ...accessUser, chosenArticles: newArticle }
    this.setState({
      user: updatedUser
    })
  }

  fuck = () => {
    console.log(this.props.articles)
  }





  render() {
    return (
      <div>
        <Profile />
        {this.state.user.chosenArticles && this.state.user.chosenArticles.map(article => <p>{article.title}</p>)}
        
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
// }

