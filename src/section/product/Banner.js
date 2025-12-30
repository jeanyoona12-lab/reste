import "./Banner.scss";
import { useEffect, useState } from "react";


// 이미지 불러오기
import Chrome_03 from "../../assets/img/CHROME_HAVEN_03.png";
import Mid_01 from "../../assets/img/Midnight_01.jpg";
import Retro_04 from "../../assets/img/RETRO_CURRENT_04.png";
import Veil_01 from "../../assets/img/Veil_01.png";
import Velora_02 from "../../assets/img/Velora_04.png";

const Banner = () => {
    const images = [Chrome_03, Mid_01, Retro_04, Veil_01, Velora_02];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="banner">
            
            <p className="txt">
                We believe rest is a <br /> form of self-respect.
            </p>
            <div
                className="image-wrap-top"
                style={{ transform: `translateX(-${index * 100}vw)` }}
            >
                {images.map((img, i) => (
                    <img key={i} src={img} alt="" />
                ))}
            </div>
            <div className="image-wrap-bottom">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt=""
                        className={index === i ? "active" : ""}
                        onClick={() => setIndex(i)} 
                    />
                ))}
            </div>
        </section>
    );
};

export default Banner;
