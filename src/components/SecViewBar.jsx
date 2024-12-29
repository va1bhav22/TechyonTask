import React, { useState } from "react";
import "../styles/viewBar.scss";
import downArrow from "../assets/icons/TY Icon.png";
import dots from "../assets/icons/dots.png";
import { Content, Filter, Grid9 } from "../assets/icons";
import TableView from "./TableView";
import GridView from "./GridView";
import SecGridView from "./SecGridView";
import SectableView from "./SectableView";
const SecViewBar = () => {
  const [activeView, setActiveView] = useState("grid");
  return (
    <section className="MainContainer">
      <section className="viewBarContainer">
        <div className="viewBarItems">
          <span
            className="text"
            style={{ fontSize: "20px", fontFamily: "inter" }}
          >
            All Projects
          </span>
          <img src={downArrow} alt="" />
        </div>
        <div className="viewBarList">
          <div
            className={`icon ${activeView === "list" ? "active" : "inactive"}`}
            onClick={() => setActiveView("list")}
          >
            <Content />
          </div>
          <div
            className={`icon ${activeView === "grid" ? "active" : "inactive"}`}
            onClick={() => setActiveView("grid")}
          >
            <Grid9 />
          </div>
          {activeView === "list" && (
            <div className={`icon inactive`}>
              <Filter />
            </div>
          )}

          <img src={dots} alt="" />
        </div>
      </section>
      <div>{activeView === "grid" ? <SecGridView /> : <SectableView />}</div>
    </section>
  );
};

export default SecViewBar;
