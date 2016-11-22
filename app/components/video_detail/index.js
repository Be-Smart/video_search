'use strict';

import React from 'react';

const VideoDetail = (props) => {
  if (!props.video) {
    return <div>Loading...</div>;
  }

  let videoTitle = props.video.snippet.title;
  let videoDescrip = props.video.snippet.description;
  let videoId = props.video.id.videoId;
  let url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div>
        <iframe src={url}></iframe>
      </div>
      <div>
        <span>{videoTitle}</span>
        <br />
        <span>{videoDescrip}</span>
      </div>
    </div>
  );
};

export default VideoDetail;
