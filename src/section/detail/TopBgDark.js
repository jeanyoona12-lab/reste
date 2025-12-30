import LightRays from "./LightRays";
import "./TopBgDark.scss";
import { useState } from "react";
import CartPopup from "../../components/CartPopup";

const TopBgDark = ({ product, onAdd }) => {
    const[isOpen,setIsOpen] = useState(false);
    if (!product) return null;
    const { title, price, description, model3D } = product;
    const formattedPrice = new Intl.NumberFormat("ko-KR").format(price ?? 0);
    const descLines = (description ?? "").split("\n");

    const handlePayClick = () => {
        
        setIsOpen(true);
    };
    const handleClose = () => setIsOpen(false);
    const handleClick = () => {
        onAdd?.(product);
        handlePayClick();
                };
    return (
        <section
            className="top_img_dark"
            style={{
                position: "relative",
                height: "600px",
                overflow: "hidden",
            }}
        >
            {/* 🔽 배경 (풀폭, 제일 아래) */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100vw",
                    height: "100%",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            >
                {/* 배경 이미지 */}
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#dcdcdc"
                    raysSpeed={1.2}
                    lightSpread={1}
                    rayLength={1.4}
                    followMouse={false}
                    noiseAmount={0.08}
                    distortion={0.04}
                />
            </div>

            {/* 🔼 콘텐츠 */}
            <div
                className="top_img_inner"
                style={{
                    position: "relative",
                    zIndex: 10,
                }}
            >
                <div
                    className="top_img_left"
                    style={{ position: "relative", zIndex: 20 }}
                >
                    {/* 3D 처리 */}
                    {model3D && (
                        <model-viewer
                            src={`${process.env.PUBLIC_URL}/${model3D}`}
                            camera-controls
                            auto-rotate
                            disable-zoom
                            exposure="1.4"
                            environment-image="neutral"
                            shadow-intensity="1"
                            camera-orbit="0deg 60deg auto"
                            min-camera-orbit="auto 45deg auto"
                            max-camera-orbit="auto 70deg auto"
                            style={{ width: "520px", height: "360px" }}
                        />
                    )}
                </div>

                <div
                    className="top_img_right_dark"
                    style={{ position: "relative", zIndex: 20 }}
                >
                    <h2 className="top_img_title">{title}</h2>

                    <p className="top_img_desc_dark">
                        {descLines.map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>

                    <div className="price_dark">₩ {formattedPrice}</div>

                    <button
                        className="btn_dark"
                        onClick={handleClick}
                    >
                        구매하기
                    </button>
                </div>
            </div>
              { isOpen &&(
                        <CartPopup onClose={handleClose}/>
                )}
        </section>
    );
};

export default TopBgDark;
