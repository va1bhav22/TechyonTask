import "../styles/dashCard.scss";

import React from "react";
import file from "../assets/card/Vector.png";
import calendar from "../assets/card/calendar.png";
import owners from "../assets/card/Owners.png";
import File from "../assets/card/clip-file_16769134 1.png";
import delay from "../assets/card/delayed.png";
import ontrack from "../assets/card/onTrack.png";
const DashCard = ({ data }) => {
  console.log(data);

  return (
    <div className="CardWrapper">
      {data?.map((item) => (
        <div
          className="cardContainer"
          style={{ position: "relative" }}
          key={item?.id}
        >
          <div className="cardHeader">
            <div className="cardTitle">
              <img src={file} alt="" /> &nbsp;
              <span>{item?.title}</span>
            </div>
            <span>ID:{item?.srn}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: "13px" }}>07</p>
            <div className="progress-section">
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${item?.progress}%` }}
                />
              </div>
            </div>
            <p style={{ fontSize: "13px" }}>14</p>
          </div>
          <div className="dateContainer">
            <img src={calendar} alt="" />
            <span>
              {item?.startDate} - {item?.endDate}
            </span>
          </div>
          <div className="ownerContainer">
            <div className="ownerItem">
              <img src={owners} alt="" />
              <span>10+</span>
            </div>
            <div className="fileItem">
              <img src={File} alt="" />
              <span>12 Files</span>
            </div>
          </div>
          {item?.status === "ontrack" ? (
            <img
              src={ontrack}
              alt=""
              style={{ position: "absolute", right: "-10px", top: "20%" }}
            />
          ) : item?.status === "delay" ? (
            <img
              src={delay}
              alt=""
              style={{ position: "absolute", right: "-10px", top: "20%" }}
            />
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default DashCard;
