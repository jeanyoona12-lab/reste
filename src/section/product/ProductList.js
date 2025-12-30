import "../../section/product/ProductList.scss"
import ProductCard from "../../components/ProductCard"

const ProductList = () => {
  return (
    <section className="product-list">
      <div className="main_txt">Products</div>
      
      <div className="item-list">
        <ProductCard />
      </div>
    </section>
  )
}

export default ProductList