import { useState } from "react";
import "./App.css";
import Circle1 from "./components/Circle1";
import Circle2 from "./components/Circle2";
import Circle3 from "./components/Circle3";
import Circle4 from "./components/Circle4";
import H1 from './components/H1';

function App() {
  const [backgroundColor0, setBackgroundColor0] = useState<string>("white");
  const [backgroundColor1, setBackgroundColor1] = useState<string>("");
  const [backgroundColor2, setBackgroundColor2] = useState<string>("");
  const [backgroundColor3, setBackgroundColor3] = useState<string>("");
  const [backgroundColor4, setBackgroundColor4] = useState<string>("");

  function changeBackgroundColor1() {
    try {
      setBackgroundColor1("red");
    } catch (error) {
      console.error(error);
    }
  }
  function changeBackgroundColor2() {
    try {
      setBackgroundColor2("green");
    } catch (error) {
      console.error(error);
    }
  }
  function changeBackgroundColor3() {
    try {
      setBackgroundColor3("yellow");
    } catch (error) {
      console.error(error);
    }
  }
  function changeBackgroundColor4() {
    try {
      setBackgroundColor4("blue");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <H1 />
      <div className="App">
      <Circle1
        changeBackgroundColor1={changeBackgroundColor1}
        backgroundColor1={backgroundColor1}
        backgroundColor={backgroundColor0}
      />
      <Circle2
        changeBackgroundColor2={changeBackgroundColor2}
        backgroundColor2={backgroundColor2}
        backgroundColor={backgroundColor0}
      />
      <Circle3
        changeBackgroundColor3={changeBackgroundColor3}
        backgroundColor3={backgroundColor3}
        backgroundColor={backgroundColor0}
      />
      <Circle4
        changeBackgroundColor4={changeBackgroundColor4}
        backgroundColor4={backgroundColor4}
        backgroundColor={backgroundColor0}
      />
    </div>
    </div>
  );
}

export default App;
