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
          name: 'the-new-york-times',
          display: 'The New York Times',
          image: 'http://www.barbaraprey.com/wp/wp-content/uploads/2011/12/The-New-York-Times-icon.png',
          isClicked: true
        },
        {
          name: 'espn',
          display: 'ESPN',
          image: 'https://www.multichannel.com/.image/t_share/MTU0MDYzNjQ2MzI1NzQ0NzIy/espn-logojpg.jpg',
          isClicked: true
        },

        {
          name: 'cnn',
          display: 'CNN',
          image: 'https://www.logodesignlove.com/wp-content/uploads/2010/06/cnn-logo-white-on-red.jpg',
          isClicked: true
        },
        {
          name: 'engadget',
          display: 'engadget',
          image: 'http://icons.iconarchive.com/icons/martz90/hex/512/engadget-icon.png',
          isClicked: true
        },
        {
          name: 'cnbc',
          display: 'CNBC',
          image: 'https://www.udelv.com/wp-content/uploads/2018/01/logo-cnbc.png',
          isClicked: true
        },
        {
          name: "the-wall-street-journal",
          display: 'TheWashingtonPost',
          image: 'https://tonyseba.com/wp-content/uploads/2014/03/The-Wall-Street-Journal-Logo-Font.jpg',
          isClicked: true
        },
        {
          name: 'the-washington-post',
          display: 'TheWashingtonPost',
          image: 'https://www.logosvgpng.com/wp-content/uploads/2018/03/the-washington-post-logo-vector.png',
          isClicked: true
        },
        {
          name: 'al-jazeera-english',
          display: 'AlJazeera',
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/1200px-Aljazeera_eng.svg.png',
          isClicked: true
        }
      ],
      articles: [],
      isLoggedIn: true
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

  onClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }




  render() {
    return (
      <div className="background">
        <form onSubmit={this.onSubmit}>
          <div className="optionContainer">
            {this.state.news.map(
              news =>
                <div className="box" >
                  {this.state.isLoggedIn &&
                    <img
                      src={news.image}
                      className="theCompany"
                      onClick={() => { this.onChange(news.name) }}
                    />
                  }
                </div>
            )}
          </div>
          <Link to="/userProfile">
            <button id="done" onClick={() => { this.onClick() }}>DONE</button>
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