import "./ProductCard.scss";
import products from "../assets/data/products.json";
import { Link } from "react-router-dom";

const ProductCard = () => {
    return (
        <section className="product">
            <div className="product-card">
                {products.map((item) => (
                    <Link
                        key={item.id}
                        to={`/detail/${item.id}`} 
                        className="inner-card"
                    >
                        <div className="card">
                            <div className="thumb">
                                <img
                                    className="base"
                                    src={require(`../assets/img/${item.image}`)}
                                    alt={item.title}
                                />
                                <img
                                    className="hover"
                                    src={require(`../assets/img/${item.hover}`)}
                                    alt={item.title}
                                />
                            </div>

                            <div className="info">
                                <p className="name">{item.title}</p>
                                <p className="price">￦{item.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProductCard;
