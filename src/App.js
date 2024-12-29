import DashboardLayout from "./layout/DashboardLayout";
import "./App.scss";
import TopBar from "./components/TopBar";
function App() {
  return (
    <DashboardLayout>
      <section className="mainContainer">
        <TopBar />
      </section>
    </DashboardLayout>
  );
}

export default App;
