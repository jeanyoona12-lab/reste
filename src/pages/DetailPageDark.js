import RemoveImg from "../section/detail/RemoveImg";
import DetailContents from "../section/detail/DetailContents";
import TopImgDark from "../section/detail/TopImgDark";
import { useEffect, useState } from "react";
import productList from "../assets/data/products.json"
const DetailPageDark = ({onAdd}) => {
    const [bestItems,setBestItems] = useState([]);
      useEffect(()=>{
        // isBest값이 true 상태목록만 저장
        const items = productList.filter((item)=>{
          return item.isBest === true;
        });
        // slice처리를 해서 베스트 아이템을 8개만.
        setBestItems(items.slice(0,8));
      },[]);
    return (
        <div className="detail-page-dark">
            {bestItems.map((item) => {
                return (
            <TopImgDark onAdd={onAdd} item={item}/>
                )
            }
        )
    }
            <RemoveImg />
            <DetailContents />
        </div>
    );
};

export default DetailPageDark;
