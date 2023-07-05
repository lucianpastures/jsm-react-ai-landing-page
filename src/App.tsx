import "./App.css";
import { NavBar, Brand, CTA } from "./components";
import {
  Blog,
  Header,
  Footer,
  WhatGPT3,
  Features,
  Possibility,
} from "./containers";

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
      <Footer />
    </div>
  );
}

export default App;
