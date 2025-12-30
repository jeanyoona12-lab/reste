import { HashRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
import DetailPage from "./pages/DetailPage"
import "../src/assets/scss/global.scss"
import ScrollToTop from "./components/ScrollToTop";
import DetailPageDark from "./pages/DetailPageDark";
import { useState } from "react";
import products from "./assets/data/products.json";
const App = () => {
  console.log(process.env.PUBILC_URL);
  const [cartItems, setCartItems] = useState([]);
 
  
  const handleAddCart = (productdetail) => {
  if (!productdetail || productdetail.id == null) {
    console.error("[App] onAdd로 받은 값이 상품 1개가 아님:", productdetail);
    return;
  }

  // 문자열/숫자 섞여도 매칭되게
 const base = products.find((p) => String(p.id) === String(productdetail.id));
  if (!base) {
    console.error("[App] products.json에 해당 id 없음:", productdetail.id);
    return;
  }

  const cartProduct = {
    id: base.id,
    title: base.title,
    price: base.price,
    image: base.image,
  };

  setCartItems((prev) => {
    const existItem = prev.find((item) => String(item.id) === String(cartProduct.id));
    if (existItem) {
      return prev.map((cart) =>
        String(cart.id) === String(cartProduct.id)
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart
      );
    }
    return [...prev, { ...cartProduct, quantity: 1 }];
  });
};

  const handleUpdateQuantity = (id, type) => {
    setCartItems((prev) => {
      if (type === "plus") {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      if (type === "minus") {
        return prev
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0); // 0 되면 삭제
      }

      return prev;
    });
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    // <BrowserRouter>
    <HashRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage onAdd={handleAddCart} />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage 
                cartItems={cartItems}
                onUpdate={handleUpdateQuantity}
                onDelete={handleDelete}/>} />
          <Route path="/detail/:id" element={<DetailPage onAdd={handleAddCart}/>} />
          <Route path="/detaildark/:id" element={<DetailPageDark onAdd={handleAddCart}/>} />
        </Route>
      </Routes>
      </HashRouter>
    // </BrowserRouter>
  )
}

export default App