import "./App.css";
import { NavBar, Brand } from "./components";
import { Header, WhatGPT3, Features } from "./containers";

function App() {
  return (
    <div>
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
    </div>
  );
}

export default App;
