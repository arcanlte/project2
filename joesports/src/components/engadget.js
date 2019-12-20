import React, { Component } from 'react';
import axios from 'axios';
import DisplayNews from './displayNews';

class Engadget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  async componentDidMount() {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=b44b40c294134b4eaab60d71b6a96391`)

    this.setState({
      articles: [...this.state.articles, ...response.data.articles]
    })
  }

  render() {
    return (
      <div>
        <DisplayNews />
        <img className="banner" src="http://icons.iconarchive.com/icons/martz90/hex/512/engadget-icon.png" />
        {this.state.articles.map(articles =>
          <div className="newsgroup">
            <div className="row">
              <img className="imageSource" src={articles.urlToImage} />
              <h4>{articles.content}</h4>
            </div>
            <div className="column">
              <p>"{articles.description}"</p>
              <p>-{articles.author}</p>
            </div>
          </div>)}
      </div>
    )
  }
}

export default Engadget;