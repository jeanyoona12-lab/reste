import { RiSofaLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoHome from "../../assets/logo-black.png";

const Header = () => {
  const [ menuDrop, setMenuDrop ] = useState(false);

  return (
    <div id="header"
      onMouseEnter={() => setMenuDrop(true)}
      onMouseLeave={() => setMenuDrop(false)}>

      <Link to={`/`}>
        <div className="home-logo">
          <img src={LogoHome} alt="로고-home" />
        </div>
      </Link>

      <div className="container">
        <div className="icon-down">
          <IoIosArrowDropdown />
        </div>
  
        <nav className={`nav ${menuDrop ? "open" : ""}`}>
            <Link to={`/product`}>
              <div className="icon-sofa">
                <RiSofaLine />
              </div>
            </Link>
          <div className="search">
            <input type="text" placeholder="검색"/>
            <IoSearch className="icon-search" />
          </div>
          <Link to={`/cart`}>
            <div className="icon-cart">
              <FiShoppingCart />
            </div>
          </Link>
        </nav>
      </div>

    </div>
  )
}

export default Header