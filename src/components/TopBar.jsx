import React from "react";
import "../styles/topBar.scss";
import plus from "../assets/icons/Union.png";
const TopBar = () => {
  return (
    <section className="topBarContainer">
      <div className="topBarItems">
        <p className="topBarTitle">Projects</p>
        <div className="topBarButton">
          <img src={plus} alt="" />
          <span>Projects</span>
        </div>
      </div>
      <div className="breadcrumb">
        <p style={{ fontSize: "15px" }}>
          <span className="start">Dashboard /</span>{" "}
          <span className="active">Project Overview</span>{" "}
        </p>
      </div>
    </section>
  );
};

export default TopBar;
