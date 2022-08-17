import "./style/App.css";
import User from "./View/Components/User";
import GetAllUsers from "./View/Pages/GetAllUsers";

function App() {
  const people = [
    { name: "Dorit", age: 18 },
    { name: "Meir", age: 20 },
    { name: "Katya", age: 29 },
    { name: "Yehuda", age: 5 },
    { name: "Gal", age: 1 },
  ];

  return (
    <div className="main">
      <h1>Lesson People</h1>
      {people.map((user) => {
        return <User name={user.name} age={user.age} />;
      })}

      <GetAllUsers />
    </div>
  );
}

export default App;
