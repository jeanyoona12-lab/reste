import { useNavigate } from "react-router-dom";
import "./CartPopup.scss";

const CartPopup = ({onClose}) => {
  const navigate = useNavigate();
  
  return (
    <div className="cart-popup-overlay">
      <div className="cart-popup">
        <h3 className="name-txt">장바구니에 추가되었습니다!</h3>
        
        {/* 버튼 */}
        <div className="btn">
          <button onClick={onClose}>더 둘러보기</button>
          <button onClick={() => navigate('/cart')}>장바구니로 이동</button>
        </div>
      </div>
    </div>
  )
}
export default CartPopup