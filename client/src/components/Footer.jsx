import React from "react";
import Logo from "../img/logo.png";

const logostyle= {
  height: "122px",
    width: "195px",
    margin : "-20px"
}
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" style = {logostyle} />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;