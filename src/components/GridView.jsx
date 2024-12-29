import React from "react";
import DashCard from "./DashCard";
import "../styles/gridView.scss";
import CardHeader from "../common/CardHeader";
const GridView = () => {
  return (
    <section className="gridContainer">
      <div>
        <CardHeader text="Not Started  2" color="#B0B0B0" />
        <DashCard data={NotStartedData} />
        <p
          style={{
            color: "#4A90E2",
            fontSize: "12px",
            textDecoration: "underline",
            textAlign: "center",
            paddingTop: "6px",
          }}
        >
          view more
        </p>
      </div>
      <div>
        <CardHeader text="In Progress  2" color="#4A90E2" />
        <DashCard data={NotStartedData} />
        <p
          style={{
            color: "#4A90E2",
            fontSize: "12px",
            textDecoration: "underline",
            textAlign: "center",
            paddingTop: "6px",
          }}
        >
          view more
        </p>
      </div>
      <div>
        <CardHeader text="Archived  2" color="#607D8B" />
        <DashCard data={NotStartedData} />
        <p
          style={{
            color: "#4A90E2",
            fontSize: "12px",
            textDecoration: "underline",
            textAlign: "center",
            paddingTop: "6px",
          }}
        >
          view more
        </p>
      </div>
      <div>
        <CardHeader text="Completed  2" color="#4CAF50" />
        <DashCard data={NotStartedData} />
        <p
          style={{
            color: "#4A90E2",
            fontSize: "12px",
            textDecoration: "underline",
            textAlign: "center",
            paddingTop: "6px",
          }}
        >
          view more
        </p>
      </div>
    </section>
  );
};

export default GridView;

const NotStartedData = [
  {
    id: 1,
    title: "Project Name",
    srn: "P-11",
    startDate: "01/01/2024 ",
    endDate: "31/01/2024",
    progress: "50",
    status: false,
    statusImg: "",
  },
  {
    id: 2,
    title: "Project Name",
    srn: "P-11",
    startDate: "01/01/2024 ",
    endDate: "31/01/2024",
    progress: "50",
    status: false,
    statusImg: "",
  },
  {
    id: 3,
    title: "Project Name",
    srn: "P-11",
    startDate: "01/01/2024 ",
    endDate: "31/01/2024",
    progress: "50",
    status: false,
    statusImg: "",
  },
];
