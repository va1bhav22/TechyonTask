import React from "react";
import "../styles/navbar.scss";
import searchIcon from "../assets/icons/Elements.png";
import notify from "../assets/icons/Mask group.png";
import notification from "../assets/icons/notification icon.png";
import user from "../assets/icons/Elements copy.png";
import setting from "../assets/icons/setting-5@2x.png";
import arrow from "../assets/icons/arrow-down.png";
const Navbar = () => {
  return (
    <section style={{ zIndex: "9999" }} className="navbar">
      <div className="navMenus">
        <span className="companyName">TECHYON</span>
        <div className="iconsContainer">
          <div>
            <img src={searchIcon} alt="searchIcon" className="icons" />
          </div>

          <div>
            <img src={setting} alt="setting" className="icons" />
          </div>
          <div>
            <img src={user} alt="user" className="icons" />
          </div>
          <div>
            <img src={notification} alt="notification" className="icons" />
          </div>

          <div>
            <img src={notify} alt="notify" className="notify" />
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
