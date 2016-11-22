'use strict';

import React from 'react';
import VideoListItem from './../video_list_item';

const VideoList = (props) => {
  let videoItems = props.videos.map(item => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={item.etag}
        video={item} />
    );
  });

  return (
    <ul>{videoItems}</ul>
  );
};

export default VideoList;
