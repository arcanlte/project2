import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import UserProfile from './userProfile';
import './../App.css';
import Background from './background';
import Header from './header';

let newImage = 0;
let passTo = [];

class DisplayNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          name: 'the-new-york-times',
          display: 'The New York Times',
          image: 'http://www.barbaraprey.com/wp/wp-content/uploads/2011/12/The-New-York-Times-icon.png',
          isClicked: false
        },
        {
          name: 'espn',
          display: 'ESPN',
          image: 'https://www.multichannel.com/.image/t_share/MTU0MDYzNjQ2MzI1NzQ0NzIy/espn-logojpg.jpg',
          isClicked: false
        },

        {
          name: 'cnn',
          display: 'CNN',
          image: 'https://www.logodesignlove.com/wp-content/uploads/2010/06/cnn-logo-white-on-red.jpg',
          isClicked: false
        },
        {
          name: 'engadget',
          display: 'engadget',
          image: 'http://icons.iconarchive.com/icons/martz90/hex/512/engadget-icon.png',
          isClicked: false
        },
        {
          name: 'cnbc',
          display: 'CNBC',
          image: 'https://www.udelv.com/wp-content/uploads/2018/01/logo-cnbc.png',
          isClicked: false
        },
        {
          name: "the-wall-street-journal",
          display: 'TheWashingtonPost',
          image: 'https://tonyseba.com/wp-content/uploads/2014/03/The-Wall-Street-Journal-Logo-Font.jpg',
          isClicked: false
        },
        {
          name: 'the-washington-post',
          display: 'TheWashingtonPost',
          image: 'https://www.logosvgpng.com/wp-content/uploads/2018/03/the-washington-post-logo-vector.png',
          isClicked: false
        },
        {
          name: 'al-jazeera-english',
          display: 'AlJazeera',
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/1200px-Aljazeera_eng.svg.png',
          isClicked: false
        }
      ],
      articles: [],
      backgroundImages: [],
      isLoggedIn: true
    }
  }

  async componentDidMount() {
    const main = this.state.news;
    console.log(this.state.news.length)
    for (let i = 0; i < this.state.news.length - 1; i++) {
      newImage = main[i].name;
      const recall = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${newImage}&apiKey=ee20649b69c44ceebde93d742bf5b536`)
      console.log(recall.data.articles)
      //   // const passTo = response.data.articles.map(image => image.urlToImage && [...this.state.backgroundImages, image.urlToImage])
      //   passTo.push(response.data.articles[i].urlToImage)
      //   console.log(response.data.articles)

      //   this.setState({
      //     backgroundImages: passTo
      //   })
      // }
      // const recall = await axios.get(`https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=ee20649b69c44ceebde93d742bf5b536`)
      passTo = recall.data.articles.map(article =>
        article.urlToImage)
      this.setState({
        backgroundImages: [...this.state.backgroundImages, ...passTo]
      })
    }

  }



  onChange = async (newsSource) => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${newsSource}&apiKey=ee20649b69c44ceebde93d742bf5b536`)
    console.log(response)
    const newsCopy = this.state.news.map(item => (item.name === newsSource) ?
      { ...item, isClicked: !item.isClicked } : item)
    console.log(newsCopy)

    this.setState({
      news: newsCopy,
      articles: [...this.state.articles, ...response.data.articles]
    })

    //console.log({ ...this.state.news[0].display })
  }

  onClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }




  render() {
    return (
      <div className="background">
        <Background backgroundImages={this.state.backgroundImages} />
        <Header />
        <form onSubmit={this.onSubmit}>
          <div className="optionContainer">
            {this.state.news.map(
              news =>
                <div className="box" >
                  {this.state.isLoggedIn &&
                    <img
                      src={news.image}
                      className={(news.isClicked) ? "clickedCompany theCompany" : "theCompany"}
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