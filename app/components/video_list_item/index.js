'use strict';

import React from 'react';
import './items.sass';

const VideoListItem = (props) => {
  let videoTitle = props.video.snippet.title;
  let imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li className='video-list__item' onClick={ () => props.onVideoSelect(props.video) }>
      <div className='video-list__img'>
        <img src={imgUrl} />
      </div>
      <span className='video-list__title'>{videoTitle}</span>
    </li>
  );
};

export default VideoListItem;
