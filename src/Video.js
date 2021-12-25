import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);

        }
        
    }

    return (
        <div className='video'>
            <video
                onClick={handleVideoPress}
                className='video__player'
                loop
                ref={videoRef}
                src="https://v16-webapp.tiktok.com/f1ee8fc5cdb53f6a8034c293dbd07260/61c728ac/video/tos/alisg/tos-alisg-pve-0037c001/fc35be16d3294f29838007a491b7fef5/?a=1988&br=2032&bt=1016&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FGWkag3-I&l=2021122508201201018907721008A63943&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anVzb2k6ZjNqOTMzODczNEApZDhnZTY5Ozs8N2YzZTdmOmdkaDItcjQwYXNgLS1kMS1zc2NgYDBjMTQ2YzYuNF5fLl46Yw%3D%3D&vl=&vr="
            > </video>
            
            <VideoFooter />
            {/* VideoFooter */}
            {/* VideoSidebar */}
            
        </div>
    )
}

export default Video
