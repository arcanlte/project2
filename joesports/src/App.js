import React from 'react';
import axios from 'axios';
import { getNews } from './services/api-helper';


class App extends React.Component {
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
          name: 'crypto-coins-news',
          display: 'CRYPTONEWS'
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
      articles: [],
      apiDataLoaded: false
    }
  }


  onChange = async (e) => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${e}&apiKey=ee20649b69c44ceebde93d742bf5b536`)
    this.setState({
      articles: response
    })

    console.log(this.state.articles)


  }

  onSubmit = async (e) => {

  }





  render() {
    return (
      <div className="app">
        <div className="newsOption">

          <form onSubmit={this.onSubmit}>
            {this.state.news.map(
              news =>
                <input
                  type="button"
                  onChange={() => { this.onChange(news.name) }}
                  value={news.display}
                />
            )}
          </form>

        </div>
      </div>
    );
  }
}

export default App;