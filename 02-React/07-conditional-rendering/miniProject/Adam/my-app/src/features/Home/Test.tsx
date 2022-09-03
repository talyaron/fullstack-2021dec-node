import React, { useState } from "react";
import logo from "../../logo.svg";
import "../../App.css";
import {Link} from 'react-router-dom';

function Test() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function handleCheck(ev: any) {
    try {
      console.dir(ev.target.checked);
      setIsChecked(ev.target.checked);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: isChecked ? `green` : `red` }}> 
            <img src={ isChecked ? require('./happy.png') : require ('./sad.png') } 
            className="App-logo"
            alt="logo"
          />

          <img src={logo} className="App-logo" alt="logo" />
        <input type="checkbox" name="" id="" onChange={handleCheck} />
        {isChecked ? <h2>Checked</h2> : <h2>Not Checked</h2>}
        <Link to='/login'>Login</Link>
      </header>
    </div>
  );
}

export default Test;
