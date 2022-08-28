import "./App.css";
import React, { useState } from "react";

function App() {
  const [isChange, setIsChange] = useState<boolean>(false);
 

  function handleChangeImg(ev: any) {
    ev.preventDefault();
    try {
      console.dir(ev.target);
      setIsChange(ev.target);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {isChange ?
          <img
            src="https://www.photo-art.co.il/wp-content/uploads/2017/09/Sunflower-on-Blue-bkgd-2.jpg"
            className="App-logo"
            alt="logo"
          />
         : (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIngN0irqurI5-I9nJB0S8GAbIeNljfACOMg&usqp=CAU"
            className="App-logo"
            alt="flower"
          />
        )}
        <button onClick={handleChangeImg}>ADD</button>
      </header>
    </div>
  );
}

export default App;
