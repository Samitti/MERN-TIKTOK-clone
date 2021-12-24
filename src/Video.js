import React from 'react';
import './Video.css';

function Video() {
    return (
        <div className='video'>
            <video
                className='video__player'
                loop
                src="https://v16-webapp.tiktok.com/f0c9ad4a76e52ed7e8eeeb2045a8f4c7/61c6665f/video/tos/alisg/tos-alisg-pve-0037c001/aa97470b2cee4253970b16d5b3a4c2b1/?a=1988&br=3226&bt=1613&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fdnkag3-I&l=20211224183107010189073077165A9DA9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amxkNzU6ZmU8OTMzODczNEApZjk6O2RlOzszN2Y8OGU5PGdrY200cjRnY2hgLS1kMS1zczBgLTA0MDUyMjE2XjNgMzM6Yw%3D%3D&vl=&vr="
                >                
            </video>
            {/* VideoFooter */}
            {/* VideoSidebar */}
            
        </div>
    )
}

export default Video
