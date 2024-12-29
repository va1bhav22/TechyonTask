import React from "react";
import "../styles/tableView.scss";
import File from "../assets/card/Vector.png";
import supervisor from "../assets/card/supervisor_account.png";
import note from "../assets/card/note_alt.png";
import Circle from "../assets/card/circle.png";
import calender from "../assets/card/calendar.png";
import avatar from "../assets/card/image 5.png";
const TableView = () => {
  return (
    <table border="1" className="project-table">
      <thead>
        <tr className="table-header">
          <th>ID</th>
          <th>
            <img src={File} alt="" /> Project Name
          </th>
          <th>%</th>
          <th>
            <img src={supervisor} alt="" /> Owner
          </th>
          <th>
            <img src={note} alt="" /> Tasks
          </th>
          <th>
            <img src={Circle} alt="" /> Status
          </th>
          <th>
            {" "}
            <img src={calender} alt="" /> Start Date
          </th>
          <th>
            {" "}
            <img src={calender} alt="" /> End Date
          </th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.id}>
            <td>{project.id}</td>
            <td>{project.projectName}</td>
            <td>{project.percentage}%</td>
            <td>
              <div className="owner">
                <img
                  src={avatar}
                  alt={project.owner.name}
                  width={24}
                  height={24}
                />
                <span>{project.owner.name}</span>
              </div>
            </td>
            <td>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ fontSize: "13px" }}>10</p>
                <div className="progress-section">
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${project?.percentage}%` }}
                    />
                  </div>
                </div>
                <p style={{ fontSize: "13px" }}>20</p>
              </div>
            </td>
            <td
              style={{ fontSize: "12px" }}
              className={`status-badge ${project.status
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {project.status}
            </td>
            <td>{project.startDate}</td>
            <td>{project.endDate}</td>
            <td>{project.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
export const projects = [
  {
    id: 1,
    projectName: "Techyon Software",
    percentage: 50,
    owner: {
      name: "Techyon",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    tasks: {
      completed: 10,
      total: 20,
    },
    status: "Not Started",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    department: "Finance",
  },
  {
    id: 2,
    projectName: "Techyon Software",
    percentage: 50,
    owner: {
      name: "Techyon",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    tasks: {
      completed: 10,
      total: 20,
    },
    status: "In Progress",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    department: "Finance",
  },
  {
    id: 3,
    projectName: "Techyon Software",
    percentage: 50,
    owner: {
      name: "Techyon",
      avatar: "../assets/card/image 5.png",
    },
    tasks: {
      completed: 10,
      total: 20,
    },
    status: "Completed",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    department: "Finance",
  },
  {
    id: 4,
    projectName: "Techyon Software",
    percentage: 50,
    owner: {
      name: "Techyon",
      avatar: "../assets/card/image 5.png",
    },
    tasks: {
      completed: 10,
      total: 20,
    },
    status: "Archived",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
    department: "Finance",
  },
];
