import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <p>canopy &amp; co.</p>
      </div>
      <div className="nav-tabs">
        <p>Shop</p>
        <p>About</p>
        <p>Featured</p>
        <p>New</p>
      </div>
      <div className="menu">
        <p>Cart</p>
        <p>Log In</p>
      </div>
    </div>
  );
}

export default Navbar;
