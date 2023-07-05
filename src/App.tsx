import "./App.css";
import { NavBar, Brand, CTA } from "./components";
import { Blog, Header, WhatGPT3, Features, Possibility } from "./containers";

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
      <Possibility />
      <CTA />
      <Blog />
    </div>
  );
}

export default App;
