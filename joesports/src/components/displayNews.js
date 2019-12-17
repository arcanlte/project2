import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import UserProfile from './userProfile';
import './../App.css';

class DisplayNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          name: 'espn',
          display: 'ESPN',
          image: 'images/espn.png'
        },
        {
          name: 'cnn',
          display: 'CNN',
          image: 'images/cnn.png'
        },
        {
          name: 'engadget',
          display: 'engadget',
          image: 'images/engadget.png'
        },
        {
          name: 'the-washington-post',
          display: 'TheWashingtonPost',
          image: 'images/the-wasington-post.png'
        },
        {
          name: 'cnbc',
          display: 'CNBC',
          image: 'images/cnbc.png'
        },
        {
          name: "the-wall-street-journal",
          display: 'TheWashingtonPost',
          image: 'images/the-wall-street-journal.png'
        },
        {
          name: 'al-jazeera-english',
          display: 'AlJazeera',
          image: 'images/al-jazeera-english.png'
        },
        {
          name: 'the-new-york-times',
          display: 'The New York Times',
          image: 'images/the-new-york-times.png'
        }
      ],
      articles: []
    }
  }

  onChange = async (newsSource) => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${newsSource}&apiKey=ee20649b69c44ceebde93d742bf5b536`)
    console.log(response)
    this.setState({
      articles: [...this.state.articles, ...response.data.articles]
    })
    console.log({ ...this.state.news[0].display })
  }




  render() {
    return (
      <div>
        <form className="optionContainer" onSubmit={this.onSubmit}>
          {this.state.news.map(
            news =>
              <img
                src={news.image}
                className="theCompany"
                onClick={() => { this.onChange(news.name) }}
              />
          )}
          <Link to="/userProfile">
            <input type="submit"
              value="done" />
          </Link>
          <Route
            path="/userProfile"
            render={(props) => {
              return (
                <UserProfile
                  articles={this.state.articles}
                  articleName={this.state.news.display}
                />
              )
            }} />

        </form>
      </div>
    )
  }
}

export default DisplayNews;