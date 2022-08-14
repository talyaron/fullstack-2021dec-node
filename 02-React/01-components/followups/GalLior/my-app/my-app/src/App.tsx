import React from "react";
import "./App.css";
import Card from "./Components/View/Card";

function App() {
  return (
    <div className="App">
      <Card
        title="Image 1"
        src="https://i.pinimg.com/736x/9a/b4/52/9ab452189deb726d7488fed8547f7a90.jpg"
        subtitle="Salty Business man"
      ></Card>

      <Card
        title="Image 2"
        src="https://i.pinimg.com/736x/7d/26/b2/7d26b2c91f9224ef7722a0e2a6cb9530--mdv-style-mens-style.jpg
        "
        subtitle="Real estate agent"
      ></Card>
      <Card
        title="Image 3"
        src="https://i.pinimg.com/originals/45/71/c3/4571c36d5c60aebbc6bfd74281188334.jpg
        "
        subtitle="web developer"
      ></Card>
    </div>
  );
}

export default App;
