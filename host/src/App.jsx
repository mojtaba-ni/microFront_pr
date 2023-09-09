import { useState } from "react";
import Button from "remoteApp/Button";
import useStore from "remoteApp/store";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useStore();

  return (
    <div className="App">
      <Navbar/>
      <h1>Host Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
