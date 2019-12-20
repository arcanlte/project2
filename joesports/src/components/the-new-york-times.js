import React, { Component } from 'react';
import axios from 'axios';
import DisplayNews from './displayNews'

class TheNewYorkTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  async componentDidMount() {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=b44b40c294134b4eaab60d71b6a96391`)

    this.setState({
      articles: [...this.state.articles, ...response.data.articles]
    })
  }

  render() {
    return (
      https://www.logodesignlove.com/wp-content/uploads/2010/06/cnn-logo-white-on-red.jpg
    )
  }
}

export default TheNewYorkTimes;