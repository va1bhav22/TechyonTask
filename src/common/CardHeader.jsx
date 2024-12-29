import React from "react";

const CardHeader = ({ text, color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "fit-content",
        padding: "0px 15px",
        borderRadius: "12px",
        color: "white",
        fontSize: "12px",
      }}
    >
      {text}
    </div>
  );
};

export default CardHeader;
