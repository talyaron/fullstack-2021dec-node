import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { FactProps } from "./factModel";
import {SonsCard} from "./SonsCard"




interface FactsCompProps {
  facts: Array<FactProps>;
}

export const Fact = ({ facts }: FactsCompProps) => {
  const [isRight, setIsRight] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)");
  console.log(facts);
  function handleSelect(ev:any){
   let id= ev.target.id
   console.log(ev.target.id)
   if(id=== `true`){
    setBackgroundColor('red');
    setIsRight(`You are wrong`)
   }else if(id=== `false`){
    setBackgroundColor('green');
    setIsRight("You are right")
  }
   }
   

  
  const { id } = useParams();
  console.log(id);

  const fact = facts.find((fct) => fct.id === id);
  const sons = fact?.sons
  // const answer = getFact(id, items)
  if (fact) {
    return (
      <div>
        <Link to="/list">Back</Link>
        <div className="header1">
        <h1> {fact ? fact.text : null} </h1>
        <h2> choose the wrong fact</h2>
        <h3 className="right">{isRight}</h3>
        </div>
         
          <button onClick={handleSelect} style={{background: backgroundColor}} className="grid1"> 
          {sons?.map((text, id) => <SonsCard sons={text} key={id}/>)}
          </button> 
         
      </div>
    );
  } else {
    return (
      <h1>
        Missing fact - <Link to="/list"> go back</Link>
      </h1>
    );
  }


}
