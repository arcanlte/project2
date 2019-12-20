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
        <img className="banner" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/1200px-Aljazeera_eng.svg.png" />
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

export default AlJazeera;