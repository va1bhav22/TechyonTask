import DashboardLayout from "./layout/DashboardLayout";
import "./App.scss";
import TopBar from "./components/TopBar";
import ViewBar from "./components/ViewBar";
import SecViewBar from "./components/SecViewBar";
function App() {
  return (
    <DashboardLayout>
      <section className="mainContainer">
        <TopBar />
        <ViewBar />
        <SecViewBar />
      </section>
    </DashboardLayout>
  );
}

export default App;
