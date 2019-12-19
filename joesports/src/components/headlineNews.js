import React from 'react';
import axios from 'axios';



function HeadlineNews(props) {
  
  return (
    <div>
      {props.news && props.news.map(
        news =>
          <div className="box" >
            {props.isLoggedIn &&
              <img
                src={news.image}
                className={(news.isClicked) ? "clickedCompany theCompany" : "theCompany"}
                onClick={() => { props.onChange(news.isClicked, news.name) }}
              />
            }
          </div>
      )}
    </div>
  )
}

export default HeadlineNews;