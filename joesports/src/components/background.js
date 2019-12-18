import React from 'react';

function Background(props) {
  return (
      <div>
        {props.backgroundImages.map(image =>
          < img className="imageBackground" src={image} />
        )}
    </div>
  )

}
export default Background;