import "./App.css";
import { NavBar, Brand } from "./components";
import { Header } from "./containers";

function App() {
  return (
    <div>
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
    </div>
  );
}

export default App;
