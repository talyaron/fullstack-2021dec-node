import { useState } from "react";
import "./App.css";
import Circle from "./components/Circle";

import H1 from "./components/H1";

function App() {
  const [backgroundColor, setBackgroundColor] = useState<string>("");

  const colors = ["red", "teal", "#7374c6", "pink"];

  return (
    <div className="App" style={{ backgroundColor: `${backgroundColor}` }}>
      <H1 />
      <div className="circles">
        {colors.map((color, i) => {
          return (
            <Circle
              key={i}
              backgroundColor={color}
              setBackgroundColor={setBackgroundColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
