import Navbar from "./Navbar";
import ToolBar from "./ToolBar";

const DashboardLayout = ({ children }) => {
  return (
    <section style={{ position: "relative" }}>
      <Navbar />
      <section style={{ display: "flex" }}>
        <ToolBar />
        <section style={{ padding: "20px" }}>{children}</section>
      </section>
    </section>
  );
};

export default DashboardLayout;
