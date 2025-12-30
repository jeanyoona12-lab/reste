import TopImg from "../section/detail/TopImg";
import TopBgDark from "../section/detail/TopBgDark";
import RemoveImg from "../section/detail/RemoveImg";
import DetailContents from "../section/detail/DetailContents";
import { useParams } from "react-router-dom";
import products from "../assets/data/productsdetail.json";
import { useEffect, useState } from "react";
import productList from "../../src/assets/data/products.json"

const DETAIL_LAYOUT_MAP = {
    cloud: [TopImg,RemoveImg, DetailContents],
    velora: [TopBgDark,RemoveImg, DetailContents],
    "retro-current": [TopBgDark,RemoveImg, DetailContents],
    veil: [TopBgDark,RemoveImg, DetailContents],
    midnight: [TopImg, RemoveImg, DetailContents],
    "chrome-haven": [TopImg,RemoveImg, DetailContents],
    moss: [TopImg,RemoveImg, DetailContents],
    still: [TopImg,RemoveImg, DetailContents],
};


const DetailPage = ({ onAdd }) => {

    const [bestItems,setBestItems] = useState([]);
  useEffect(()=>{
    // isBest값이 true 상태목록만 저장
    const items = productList.filter((item)=>{
      return item.isBest === true;
    });
    // slice처리를 해서 베스트 아이템을 8개만.
    setBestItems(items.slice(0,8));
  },[]);
  
    const { id } = useParams();

    // 1차 방어
    if (!id) return <div>잘못된 접근임</div>;

    const safeId = id.toLowerCase();

    const product = products.find(
      (item) => item.id.toLowerCase() === safeId
      
    );
    

    if (!product) return <div>{safeId} 페이지 없음</div>;

    const Layout = DETAIL_LAYOUT_MAP[safeId];
    if (!Layout) return <div>페이지 구성 없음</div>;
    
    return (
        <div id="detail-page" className={`detail ${safeId}`}>
            {Layout.map((Component, index) => (
                <Component key={index} product={product} onAdd={onAdd} bestItems={bestItems}/>
            ))}
        </div>
    );
};

export default DetailPage;
