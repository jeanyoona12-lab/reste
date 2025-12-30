import "./DetailContents.scss"

const DetailContent = ({ product }) => {
    if (!product?.detailPoster) return null;

    return (
        <section className="detail-contents">
            <div className="detail-contents_inner poster">
                <img
                    src={`${process.env.PUBLIC_URL}${product.detailPoster}`}
                    alt={`${product.title} 상세 이미지`}
                />
            </div>
        </section>
    );
};

export default DetailContent;
