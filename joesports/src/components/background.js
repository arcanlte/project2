import React from 'react';

function Background(props) {
  console.log(props.backgroundImages)
  return (
    <div>
      {props.backgroundImages.map(image =>
        < img src={image} />
      )}
    </div>
  )

}
export default Background;