import resteVideo from "../../assets/Reste.webm";
import restePoster from "../../assets/Reste-poster.jpg";
import mobileVideo from "../../assets/Reste_mobile.webm";
import resteLogo from "../../assets/logo-white.png";
import "./MainVideo.scss";

const MainVideo = () => {  
  return (
    <section id="main-video">
      <div className="video-wrap">
        <video autoPlay muted loop poster={restePoster}>
            <source 
              src={mobileVideo}
              media="(max-width:412px)"
              type="video/webm"
            />
            <source 
              src={resteVideo}
              type="video/webm"
            />
          </video>
        <img className="logo-img"
          src={resteLogo}
          alt="로고"
        />
      </div>
    </section>
  )
}

export default MainVideo