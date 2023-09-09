import React from "react";
import imgAvatar from "../assets/react.svg" 
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLinks">
        <ul>
          <li>خانه</li>
          <li>محصولات</li>
          <li> تخفیف دار ها</li>
          <li> درباره ما</li>
        </ul>
      </div>
      <div className="navbarInfo">
          <div className="navbarAvatar">
              <img src={imgAvatar} alt="" />
          </div>
          <div className="navbarAvatar" >
              <img src={imgAvatar} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Navbar;
