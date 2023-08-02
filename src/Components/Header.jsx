import React from "react";
import "./Header.css";
import Input from "./Input";

function Header() {
  return (
    <div className="header">
    <div className="background">
      <h2 className="head">Search Images</h2>
    </div>
    <Input/>
  </div>
  );
}

export default Header;
