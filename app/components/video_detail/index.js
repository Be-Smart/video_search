'use strict';

import React from 'react';
import './video_detail.sass';

const VideoDetail = (props) => {
  if (!props.video) {
    return <div>Loading...</div>;
  }

  let videoTitle = props.video.snippet.title;
  let videoDescrip = props.video.snippet.description;
  let videoId = props.video.id.videoId;
  let url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video'>
      <div className='video__player'>
        <iframe src={url}></iframe>
      </div>
      <div className='video__detail'>
        <h2 className='video__title'>{videoTitle}</h2>
        <p className='video__description'>{videoDescrip}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
