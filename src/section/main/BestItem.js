import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import './BestItem.scss';
import { Link } from "react-router-dom";
import img1 from "../../assets/img/Veil_01.png";
import img2 from "../../assets/img/RETRO_CURRENT_03.png";
import img3 from "../../assets/img/CHROME_HAVEN_01.png";
import img4 from "../../assets/img/Cloud_01.png";
import img5 from "../../assets/img/Velora_01.png";
import img6 from "../../assets/img/Midnight_05.png";
const slideData = [
  { id: 1, img: img1, title: "Veil"},
  { id: 2, img: img2, title: "RETRO_CURRENT"},
  { id: 3, img: img3, title: "CHROME_HAVEN"},
  { id: 4, img: img4, title: "Cloud"},
  { id: 5, img: img5, title: "Velora"},
  { id: 6, img: img6, title: "Midnight"},
];

const BestItem = () => {

  return (
    <section className="best-item-section">
      {/* 이미지 슬라이드 */}
      <div className="container">
        <Swiper
          slidesPerView={"auto"}   // CSS에서 지정한 너비 사용
          spaceBetween={0}        // 슬라이드 간격
          freeMode={true}          // 부드러운 관성 스크롤
          mousewheel={true}        // 마우스 휠 지원
          grabCursor={true}        // 마우스 커서 변경
          modules={[FreeMode, Mousewheel]} 
          className="best-item-swiper"
        >
          {slideData.map((item) => (
            <SwiperSlide key={item.id} className="best-item-slide">
              <div className="img-box">
                <img src={item.img} alt={item.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 버튼 */}
      <Link to={`/product`}>
        <button>자세히 보기</button>
      </Link>
    </section>
  );
};

export default BestItem;