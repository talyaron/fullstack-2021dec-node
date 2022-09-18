import { useEffect, useState } from "react";
import "./style/App.css";
import User from "./View/Components/User";
import GetAllUsers from "./View/Pages/GetAllUsers";
import axios from "axios";

function App() {
  const [welcome, setWelcome] = useState();

  const people = [
    { name: "Dorit", age: 18 },
    { name: "Meir", age: 20 },
    { name: "Katya", age: 29 },
    { name: "Yehuda", age: 5 },
    { name: "Gal", age: 1 },
  ];

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/welcome");
      // console.log(data);
      // alert(data);
      setWelcome(data);
    })();
  }, []);

  const pressOnBTN = async () => {
    const { data } = await axios.get("/api/welcome");
    // console.log(data);
    // alert(data);
    setWelcome(data);
  };

  console.log(welcome);

  return (
    <div className="main">
      <h1>Lesson People</h1>
      {welcome ? <>Yes</> : <>No</>}
      {people.map((user) => {
        return <User name={user.name} age={user.age} />;
      })}

      <button onClick={pressOnBTN}>CLICK ON ME</button>
      <GetAllUsers />
    </div>
  );
}

export default App;
