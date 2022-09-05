import { useState } from "react";
import SetAllNames from "./components/SetAllNames";
import ShowAllNames from "./components/ShowAllNames";

function App() {
  const [name, setName] = useState<string>("Dorit");

  return (
    <div className="App">
      <SetAllNames setName={setName} /> {/* get the names */}
      <ShowAllNames name={name} /> {/* show the names */}
    </div>
  );
}

export default App;
