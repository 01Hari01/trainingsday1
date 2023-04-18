import React from "react";
import ReactPlayer from "react-player";

const VideoBackground=()=>{
    return(
        <div className="video-background">
            <ReactPlayer
                url="https://www.videoask.com/f79syul9h"
                playing={true}
                loop
                muted
                width="100%"
                height="100%"
                />

        </div>
    )
}
export default VideoBackground;