import "../../pages/cart.scss";
import { PiEmpty } from "react-icons/pi";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Number from "../../components/Number";
const CartContents = ({ cartItems, onUpdate, onDelete }) => {
  const cartView = cartItems.length > 0;
  
  const navigate = useNavigate();

  return (
    <section className="cart-contents">
      <h1>LIST</h1>

      {!cartView && (
        <div className="empty">
          <PiEmpty className="icon" />
          <h1>EMPTY</h1>
        </div>
      )}

      {cartView && (
        <div className="cart-wrap">
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="img-box">
                  <img
                    src={require(`../../assets/img/${item.image}`)}
                    alt={item.title}
                  />
                </div>

                <div className="info-box">
                  <h3 onClick={()=> navigate("/detail/:id")}>{item.title}</h3>

                  <div className="price-wrap">
                    <p>￦ {(item.price * item.quantity).toLocaleString()}</p>

                    <div className="count-wrap">
                      <button onClick={() => onUpdate(item.id, "minus")}><CiCircleMinus /></button>
                      <Number value={item.quantity}
                              places={[10,1]}          
                              padding={3}
                              gap={0}
                              horizontalPadding={0}
                              gradientHeight={4}
                              textColor="inherit"   
                              fontWeight={400}
                              gradientFrom="transparent" 
                              gradientTo="transparent"
                      />
                      <button onClick={() => onUpdate(item.id, "plus")}><CiCirclePlus /></button>
                    </div>
                    
                  </div>
                </div>

                <button onClick={() => onDelete(item.id)}><MdDeleteOutline /></button>
              </li>
            ))}
          </ul>

          </div>
        
       )} 
    </section>
  );
};

export default CartContents;
