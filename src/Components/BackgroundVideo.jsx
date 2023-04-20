import React from 'react';
import video from "./video.mp4";
import './BackgroundVideo.css'


const BackgroundVideo = () => {
  return (
    <div className='video-background'>
      <video autoPlay loop muted>
        <source src={video} type='video/mp4' /> 
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
