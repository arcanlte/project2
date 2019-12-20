import React, { Component } from 'react';
import DisplayNews from './displayNews';
import axios from 'axios';

class CNN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  async componentDidMount() {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=b44b40c294134b4eaab60d71b6a96391`)

    this.setState({
      articles: [...this.state.articles, ...response.data.articles]
    })
  }

  render() {
    return (
      <div>
        <DisplayNews />
        <img className="banner" src="https://www.logodesignlove.com/wp-content/uploads/2010/06/cnn-logo-white-on-red.jpg" />
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

export default CNN;