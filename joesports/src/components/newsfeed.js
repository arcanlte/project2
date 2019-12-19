import React from 'react';

let i = 0;
const NewsFeed = (props) => {
  console.log("I AM HERE")
  return (
    <div>
      {props.chosenArticles && props.chosenArticles.map((article, key) =>
        <div className="newBox" key={key}>
          <a className href={article.url}>
            <img className="imageContent" src={article.urlToImage} alt="image source" />
          </a>
          {/* <Link to="page"> */}
            <span className="description">
              <h3>"{article.title}"</h3>
              <p className="author">-{article.author}</p>
            </span>
          {/* </Link> */}
          {/* <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p>{article.content}</p> */}
        </div>
      )}

    </div>
  )
}

export default NewsFeed;