import DashboardLayout from "./layout/DashboardLayout";
import "./App.scss";
import TopBar from "./components/TopBar";
import ViewBar from "./components/ViewBar";
function App() {
  return (
    <DashboardLayout>
      <section className="mainContainer">
        <TopBar />
        <ViewBar />
      </section>
    </DashboardLayout>
  );
}

export default App;
