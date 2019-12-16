import React from 'react';

const NewsFeed=(props)=> {
  return (
    <div>NEWS FEED
      {props.chosenArticles && props.chosenArticles.map(article => <p>{article.title}</p>)}
      
    </div>
  )
}

export default NewsFeed;

//{this.state.user.chosenArticles && this.state.user.chosenArticles.map(article => <p>{article.title}</p>)}
// }