import "./App.css";
import { NavBar } from "./components";
import { Header } from "./containers";

function App() {
  return (
    <div>
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
    </div>
  );
}

export default App;
