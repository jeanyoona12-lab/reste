import MainVideo from "../section/main/MainVideo";
import ProductMD from "../section/main/ProductMD";
import BestItem from "../section/main/BestItem";
import BrandPR from "../section/main/BrandPR";
import products from "../assets/data/products.json";
const MainPage = ({ onAdd }) => {
   const item = products.find((p) => String(p.id) === "midnight");
  return (
    <div id="main-page">
      <MainVideo />
      {item && <ProductMD onAdd={onAdd} item={item} />}
      <BestItem />
      <BrandPR />
    </div>
  );
};


export default MainPage;
