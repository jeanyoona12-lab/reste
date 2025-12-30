import LightRays from "./LightRays";

const TopImgDark = ({ product }) => {
    if (!product) return null;

    const { model3D } = product; 
      
    return (
        <section
            className="top_img dark"
            style={{ position: "relative", height: "600px" }}
        >
            {/* 배경 이펙트 */}
            <div
                className="top_img_inner"
                style={{ position: "absolute", inset: 0, zIndex: 0 }}
            >
                <LightRays
                    raysOrigin="top-left"
                    raysColor="#00ffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>

            {/* 3D 모델 */}
            <div
                className="top_img_left"
                style={{
                    position: "relative",
                    zIndex: 10,
                    height: "100%"
                }}
            >
                <model-viewer
                    src={`${process.env.PUBLIC_URL}/${model3D}`}
                    camera-controls
                    auto-rotate
                    disable-zoom
                    style={{ width: "520px", height: "360px" }}
                    />
            </div>
        </section>
    );
};

export default TopImgDark;
