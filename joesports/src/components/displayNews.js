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
          display: 'ESPN'
        },
        {
          name: 'cnn',
          display: 'CNN'
        },
        {
          name: 'engadget',
          display: 'engadget'
        },
        {
          name: 'the-washington-post',
          display: 'TheWashingtonPost'
        },
        {
          name: 'cnbc',
          display: 'CNBC'
        },
        {
          name: "the-wall-street-journal",
          display: 'TheWashingtonPost'
        },
        {
          name: 'al-jazeera-english',
          display: 'AlJazeera'
        },
        {
          name: 'the-new-york-times',
          display: 'The New York Times'
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
              <input
                type="button"
                className="theCompany"
                onClick={() => { this.onChange(news.name) }}
                value={news.display}
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