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
                src="https://v16-webapp.tiktok.com/a5868b60550f42a1b7d11e5072d73a80/61cf82bb/video/tos/alisg/tos-alisg-pve-0037c001/38b2068a46b849fcb93aa013b38c199f/?a=1988&br=6840&bt=3420&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FGWkag3-I&l=20211231162232010192159238188F7C63&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajZ0bzc6Zmw3OjMzODczNEApZGQ5NzloNDw6N2lnMzM4OGdjYzNlcjQwMTNgLS1kMS1zcy02NjUwYjIwYjFjNV5eMmI6Yw%3D%3D&vl=&vr="
            > </video>
            
            <VideoFooter />
            {/* VideoFooter */}
            {/* VideoSidebar */}
            
        </div>
    )
}

export default Video
