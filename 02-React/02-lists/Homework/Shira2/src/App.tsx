import { useState } from "react";
import axios from "axios";
import "./view/styles/app.scss";






let dogPictureVar = {};
function App() {

  const [dogPicture, setdogPicture] = useState(); //initial value


  async function handleGetDog() {
    try {
      const { data } = await axios.get("https://catfact.ninja/fact"); //rest API
      console.log(data);
      if (!data) throw new Error("No data");

      const { dogPicture } = data;
      if (!dogPicture) throw new Error("No dog picture");
      setdogPicture(dogPicture);
      dogPictureVar = dogPicture;

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleGetDog}>Get Dog</button>
        <div>{dogPicture}</div>

     

      </header>
    </div>
  );
}

export default App;
