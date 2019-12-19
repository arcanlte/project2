import React from 'react';

let i = 0;
const NewsFeed = (props) => {

  return (
    <div>
      {props.chosenArticles && props.chosenArticles.map((article, key) =>
        <div className="newBox" key={key}>
          <h2>{article.name}</h2>
          {article[i] && <h2>{article.source.name}</h2>}
          <a href={article.url}>
            <img className="imageContent" src={article.urlToImage} alt="image source" />
          </a>
          {/* <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p>{article.content}</p> */}
        </div>
      )}

    </div>
  )
}

export default NewsFeed;

//{this.state.user.chosenArticles && this.state.user.chosenArticles.map(article => <p>{article.title}</p>)}
// }