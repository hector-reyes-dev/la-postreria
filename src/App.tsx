import { useState } from "react";
import Hero from "./components/Hero/Hero";
import "./App.scss";
import Awards from "./components/Awards/Awards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      <Awards />
    </div>
  );
}

export default App;
