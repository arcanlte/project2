import React from 'react';
import DisplayNews from './displayNews';

function Page(props) {
  console.log(props.headlineArticle)
  return (
    <div>
      <DisplayNews />
    </div>
  ) 
}

export default Page;