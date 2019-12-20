import React from 'react';
import { Link } from 'react-router-dom';

let i = 0;
const NewsFeed = (props) => {
  console.log("I AM HERE")
  return (
    <div>
      {props.chosenArticles && props.chosenArticles.map((article, key) =>
        <div className="newBox" key={key}>
          <h1>{article.name}</h1>
          <Link to={{
            pathname: '/page',
            state: {
              image: article.urlToImage,
              title: article.title,
              author: article.author,
              description: article.description
            }
          }}>
            <img className="imageContent" src={article.urlToImage} alt="image source" />
          </Link>
            <span className="description">
            <h3>"{article.title}"</h3>
            <p className="author">-{article.author}</p>
            </span>
          {/* <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p>{article.content}</p> */}
        </div>
      )}

    </div>
  )
}

export default NewsFeed;