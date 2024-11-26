// components/BackgroundVideo.js

import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/vedio.mp4" type="video/mp4" />
        {/* Add additional video formats for better browser support */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
