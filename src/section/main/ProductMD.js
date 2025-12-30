import mdImg from "../../assets/img/Midnight_05.png";
import "./ProductMD.scss";
import { Link } from "react-router-dom";
// import products from "../../assets/data/products.json"
import { useRef, useState, useEffect } from "react";
import products from "../../assets/data/products.json";
const ProductMD = ({onAdd}) => {
const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
 const handleClick = () => {
  const item = products.find((p) => p.id === "midnight"); // 네 id 규칙에 맞게
  if (!item) return;
  onAdd(item);
};
  
  return (
    <section className={`product-md ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}>
      <div className="product-description">
        <div className="product-detail">
          <img src={mdImg} alt="미드나잇 소파" />
          <div className="product-txt">
            <h3>MidNight</h3>
            <p>
              풍부한 볼륨과 유연한 가죽 주름으로 <br />편안함을 직관적으로 전달
            </p>
            <h4>￦ 1,390,000</h4>
            <Link to={`/detail/midnight`} onClick={handleClick}>
              <button >구매하기</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductMD;