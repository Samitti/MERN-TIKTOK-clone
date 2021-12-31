import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    // BEM naming convention
    <div className="app"> 
      <div className="app__videos">
        <Video url="https://v16-webapp.tiktok.com/a5868b60550f42a1b7d11e5072d73a80/61cf82bb/video/tos/alisg/tos-alisg-pve-0037c001/38b2068a46b849fcb93aa013b38c199f/?a=1988&br=6840&bt=3420&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FGWkag3-I&l=20211231162232010192159238188F7C63&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajZ0bzc6Zmw3OjMzODczNEApZGQ5NzloNDw6N2lnMzM4OGdjYzNlcjQwMTNgLS1kMS1zcy02NjUwYjIwYjFjNV5eMmI6Yw%3D%3D&vl=&vr="
          channel="Samitti"
          description="Mern ticktok clone"
          song="Yea lets learn react!"
          likes={124}
          messages={332}
          shares={233}
        />
        <Video url="https://v16-webapp.tiktok.com/a5868b60550f42a1b7d11e5072d73a80/61cf82bb/video/tos/alisg/tos-alisg-pve-0037c001/38b2068a46b849fcb93aa013b38c199f/?a=1988&br=6840&bt=3420&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FGWkag3-I&l=20211231162232010192159238188F7C63&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajZ0bzc6Zmw3OjMzODczNEApZGQ5NzloNDw6N2lnMzM4OGdjYzNlcjQwMTNgLS1kMS1zcy02NjUwYjIwYjFjNV5eMmI6Yw%3D%3D&vl=&vr="
          channel="Samitti"
          description="Mern ticktok clone"
          song="Yea lets learn react!"
          likes={124}
          messages={332}
          shares={233}
        />
      </div>

      {/* app container */}
      {/* videos */}
      {/* <video /> */}
      {/* <video /> */}
      {/* <video /> */}
      {/* <video /> */}
      {/* <video /> */}
      {/* <video /> */}
    </div>
  );
}

export default App;
