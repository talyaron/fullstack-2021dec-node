import { useState } from "react";
import Card from "./View/Components/Card";


interface Score{
title:string;
text:string;
}

const scores : Score[] = [
  {
  title:'Shira balance',
  text:'1050$'},

]

function App() {
  // const [number, setNumber] = useState<number>(3);
  const [myScore] = useState < string > (""); 

  return (
    <div className="App">
      
     <h4 className="title">{myScore}</h4>
                <div className="wrapper">
                    {scores.map((score:Score) => (<Card  title={score.title} text={score.text}/>))}
                </div>
    </div>
  );
}

export default App;
