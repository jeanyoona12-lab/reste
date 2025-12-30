import { useEffect,useState } from "react";
import CartContents from "../section/cart/CartContents";
import "./cart.scss";


const CartPage = ({cartItems,onUpdate,onDelete,onPay}) => {
  
  
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {

    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setTotalPrice(total);
  }, [cartItems]);
  const isEmpty = cartItems.length === 0;

  const handlePay = () => {
    if (isEmpty) return; // 로직 방어 (필수)
    onPay?.(cartItems, totalPrice); // 결제 함수가 있으면 실행
  };
  return (
    <div id="cart-page">
      <div className="top">
        <h1>MY CART</h1>
      </div>
      <div className="middle">
        <CartContents cartItems={cartItems} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
      <div className="buy">
        <div>
          <span>￦ {Number(totalPrice).toLocaleString()}</span> 
          <span>Total</span>
        </div>
        <button className={`pay-btn ${isEmpty ? "disabled" : ""}`}
                disabled={isEmpty}
                onClick={handlePay}> 결제하기</button>
      </div>
    </div>
  )
}

export default CartPage