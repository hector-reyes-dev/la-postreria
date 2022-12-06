import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Hero from "./components/Hero/Hero";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default App;
