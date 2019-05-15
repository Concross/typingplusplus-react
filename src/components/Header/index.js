import React from "react";
import Logo from "../Logo";
import Nav from "../Nav";
import "./index.scss";

const Header = () => {
  return (
    <header className="site-header">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
