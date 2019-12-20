import React, { Component } from 'react';
import axios from 'axios';
import DisplayNews from './displayNews';
class AlJazeera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  async componentDidMount() {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=b44b40c294134b4eaab60d71b6a96391`)

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

export default AlJazeera;