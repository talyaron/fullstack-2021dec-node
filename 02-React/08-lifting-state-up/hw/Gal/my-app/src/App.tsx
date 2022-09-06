import { useState } from "react";
import "./App.css";
import Circle1 from "./components/Circle1";
import Circle2 from "./components/Circle2";
import Circle3 from "./components/Circle3";
import Circle4 from "./components/Circle4";
import H1 from './components/H1';

function App() {
  const [color, setColor] = useState<string>("");

  function changeBackgroundColor1() {
    try {
      setColor("red");
    } catch (error) {
      console.error(error);
    }
  }
  function changeBackgroundColor2() {
    try {
      setColor("green");
    } catch (error) {
      console.error(error);
    }
  }
  function changeBackgroundColor3() {
    try {
      setColor("yellow");
    } catch (error) {
      console.error(error);
    }
  }
  function changeBackgroundColor4() {
    try {
      setColor("blue");
    } catch (error) {
      console.error(error);
    }
  }

  // Look at the dev tools (f12) the size of App 
  //This App is changing all the 'app' background not responsive by the size of the screen - but by the size of the default screen which is my screen
  //For fiting your screen go to - App.css/.godDiv/margin-top & change the '%' by your default (tnx and sorry, the mission is done).

  return (
    <div className="App" style={{ backgroundColor: `${color}`}}> 
      <H1 />
      <div className="circles">
      <Circle1
          changeBackgroundColor1={changeBackgroundColor1}
          backgroundColor1={color}       
      />
      <Circle2
        changeBackgroundColor2={changeBackgroundColor2}
        backgroundColor2={color}
     
      />
      <Circle3
        changeBackgroundColor3={changeBackgroundColor3}
        backgroundColor3={color}
     
      />
      <Circle4
        changeBackgroundColor4={changeBackgroundColor4}
        backgroundColor4={color}
   
      />
    </div>
    </div>
  );
}

export default App;
