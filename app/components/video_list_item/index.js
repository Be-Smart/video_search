'use strict';

import React from 'react';

const VideoListItem = (props) => {
  let videoTitle = props.video.snippet.title;
  let imgUrl = props.video.snippet.thumbnails.default.url;


  return (
    <li onClick={ () => props.onVideoSelect(props.video) }>
      <div>
        <img src={imgUrl} />
        <span>{videoTitle}</span>
      </div>
    </li>
  );
};

export default VideoListItem;
