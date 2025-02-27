import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

let passTo = 0;
let newImage = 0;

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headingImages: [],
      news: ['cnn','espn','cnbc']
    }
 
  }

  async componentDidMount() {
    const main = this.state.news;
    for (let i = 0; i < this.state.news.length; i++) {
      newImage = main[i];
      const recall = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${newImage}&apiKey=b44b40c294134b4eaab60d71b6a96391`)
      passTo = recall.data.articles.map(article =>
        article.urlToImage)
      this.setState({
        headingImages: [...this.state.headingImages, ...passTo]
      })
    }
  }
  render() {
    return (
      <div className="backgroundImg">
        {this.state.headingImages.map(images =>
          <><img className="backgroundImages" src={images} /></>)}
      </div>
    )
  }
}

export default Background;