import React, { useState } from "react";
import "../styles/viewBar.scss";
import downArrow from "../assets/icons/TY Icon.png";
import dots from "../assets/icons/dots.png";
import { Content, Grid9 } from "../assets/icons";
import TableView from "./TableView";
import GridView from "./GridView";
const ViewBar = () => {
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

          <img src={dots} alt="" />
        </div>
      </section>
      <div>{activeView === "grid" ? <GridView /> : <TableView />}</div>
    </section>
  );
};

export default ViewBar;
