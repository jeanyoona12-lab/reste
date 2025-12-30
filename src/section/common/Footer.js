import FooterLogo from "../../assets/logo-white.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <img src={FooterLogo} alt="푸터로고" />
      <p>© 2025 Reste. All rights reserved.</p>
    </div>
  )
}

export default Footer