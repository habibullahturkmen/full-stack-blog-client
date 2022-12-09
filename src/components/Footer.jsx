import React from "react";
import Logo from "../images/logo.png";

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Logo"/>
            <span>Made with ❤️ and <strong>React.js</strong>.</span>
        </footer>
    );
}

export default Footer;
