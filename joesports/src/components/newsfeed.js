import React from 'react';
let i = 0;

function NewsFeed(props) {
  console.log(props.articles)
  return (
    <div>

      {props.articles && props.articles.map((article, key) =>
        <div className="newBox" key={key}>
          <h1>{article.source.name}</h1>
          <img className="imageContent" src={article.urlToImage} alt="image source" />

          <span className="description">
            <h3>"{article.title}"</h3>
            <p className="author">-{article.author}</p>
          </span>
        </div>
      )}

    </div>
  )
}

export default NewsFeed;