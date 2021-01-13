import React from "react"
import "./home-page-video.scss"

const HomePageVideo = () => {
  return (
    <div className="home-video-container">
      <div className="img-one">
        <div className="poster-cutout">
          <img
            src={require("../images/home-page-video/poster-cutout.png")}
            alt=""
            // data-ww="['2149px','2149px','2149px','2149px']"
            // data-hh="['1270px','1270px','1270px','1270px']"
            // width="2186"
            // height="1292"
            // data-no-retina=""
            className="poster-img"
          />
        </div>
      </div>
      <div className="video-div">
        <video
          muted
          // playsinline=""
          poster={require("../images/home-page-video/poster.png")}
          autoplay=""
          // style="object-fit: cover; background-size: cover; width: 111.091%; height: 100%; visibility: inherit; opacity: 1; display: block; position: absolute; left: -5.54561%; top: 0px;"
          // classname="resizelistener"
          loop
          controls
          // preload="auto"
        >
          <track kind="captions" />
          <source
            src={require("../images/home-page-video/grass-sunset-video.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  )
}

export default HomePageVideo
