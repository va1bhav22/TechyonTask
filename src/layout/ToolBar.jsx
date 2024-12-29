import React from "react";
import "../styles/toolbar.scss";
import menu from "../assets/icons/menu.png";
import plus from "../assets/icons/plus.png";
import Clouds from "../assets/icons/Clouds.png";
import Line from "../assets/icons/Line 47.png";
import BigGrids from "../assets/icons/biggrid_view.png";
import {
  Arrows,
  BigGrid,
  Cloud,
  Code,
  Feedback,
  Grid,
  Help,
  Home,
  People,
  Report,
  Search,
} from "../assets/icons";
const ToolBar = () => {
  return (
    <section style={{ zIndex: "9999" }} className="toolBarContainer">
      <div className="menuItems">
        <img src={menu} alt="Menu" />
        <img src={plus} alt="Add " />
        <div className="SvgIcon">
          <Home />
        </div>
        <img src={Clouds} alt="Clouds" />
        <div className="SvgIcon">
          <Cloud />
        </div>
        <div className="SvgIcon">
          <Grid />
        </div>
        <div className="SvgIcon">
          <Arrows />
        </div>
        <div className="SvgIcon">
          <Search />
        </div>
        <div className="SvgIcon">
          <Code />
        </div>
        <div className="SvgIcon">
          <Report />
        </div>
        <div className="SvgIcon">
          <People />
        </div>
        <img src={Line} alt="" />
        <img src={BigGrids} alt="" />

        <div className="SvgIcon">
          <Help />
        </div>
        <div className="SvgIcon">
          <Feedback />
        </div>
      </div>
    </section>
  );
};

export default ToolBar;
