import React, { Component } from 'react';

function YoutubeVideo({videoId, videoName, videoLength, videoDescription}){
    return (
        <div id={videoId}>
            <h1>{videoName} - {(parseInt(videoLength)/1000).toFixed(1)} MB</h1>
            <p>{videoDescription}</p>
        </div>
    )
}
 
export default YoutubeVideo;