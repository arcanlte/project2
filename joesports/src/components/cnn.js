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
        {this.state.articles.map(articles =>
          <>
            {articles.title}
          </>)}
      </div>
    )
  }
}

export default CNN;