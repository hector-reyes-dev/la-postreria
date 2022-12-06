import { useState } from "react";
import Hero from "./components/sections/Hero/Hero";
import Awards from "./components/sections/Awards/Awards";
import UsContent from "./components/sections/UsContent/UsContent";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      <Awards />
      <UsContent />
    </div>
  );
}

export default App;
