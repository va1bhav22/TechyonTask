import React from "react";
import DashCard from "./DashCard";
import "../styles/gridView.scss";
import CardHeader from "../common/CardHeader";
const SecGridView = () => {
  return (
    <section className="gridContainer">
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
        <CardHeader text="In Review  2" color="#3B78A3" />
        <DashCard data={dely} />
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
        <CardHeader text="In revision  2" color="#3E4B4F" />
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
        <DashCard data={completed} />
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

export default SecGridView;
const NotStartedData = [
  {
    id: 1,
    title: "Project Name",
    srn: "P-11",
    startDate: "01/01/2024 ",
    endDate: "31/01/2024",
    progress: "50",
    status: "ontrack",
  },
  {
    id: 2,
    title: "Project Name",
    srn: "P-11",
    startDate: "01/01/2024 ",
    endDate: "31/01/2024",
    progress: "50",
    status: "",
    statusImg: "",
  },
  {
    id: 3,
    title: "Project Name",
    srn: "P-11",
    startDate: "01/01/2024 ",
    endDate: "31/01/2024",
    progress: "50",
    status: "",
    statusImg: "",
  },
];

const dely = [
  {
    id: 1,
    title: "Project Name",
    srn: "P-11",
    startDate: "01/01/2024 ",
    endDate: "31/01/2024",
    progress: "50",
    status: "delay",
  },
  {
    id: 2,
    title: "Project Name",
    srn: "P-11",
    startDate: "01/01/2024 ",
    endDate: "31/01/2024",
    progress: "50",
    status: "",
    statusImg: "",
  },
  {
    id: 3,
    title: "Project Name",
    srn: "P-11",
    startDate: "01/01/2024 ",
    endDate: "31/01/2024",
    progress: "50",
    status: "",
    statusImg: "",
  },
];

const completed = [
  {
    id: 1,
    title: "Project Name",
    srn: "P-11",
    startDate: "01/01/2024 ",
    endDate: "31/01/2024",
    progress: "50",
    status: "",
  },
  {
    id: 2,
    title: "Project Name",
    srn: "P-11",
    startDate: "01/01/2024 ",
    endDate: "31/01/2024",
    progress: "50",
    status: "",
    statusImg: "",
  },
  {
    id: 3,
    title: "Project Name",
    srn: "P-11",
    startDate: "01/01/2024 ",
    endDate: "31/01/2024",
    progress: "50",
    status: "",
    statusImg: "",
  },
];
