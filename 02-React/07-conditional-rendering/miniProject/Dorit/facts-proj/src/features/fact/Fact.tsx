import { useParams, Link } from "react-router-dom";
import { FactProps } from "./factModel";
import { useState, ChangeEvent, FormEvent } from "react";

interface FactsCompProps {
  facts: Array<FactProps>;
}

export const Fact = ({ facts }: FactsCompProps) => {
  let [answer, setAnswer] = useState<string>("");
  const [right, setRight] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("")
  const [fontSize, setFontSize] = useState<number>(0)
  const { id } = useParams();

  function handleWrite(ev: any) {
    try {
      setAnswer(ev.target.value)
      console.log(answer)
    } catch (error) {
      console.error(error);
    }
  }

  const fact = facts.find((fct) => fct._id === id);

  function handleSubmit(ev: any) {
    ev.preventDefault();
    if(answer === fact?.isTrue) {
      setRight("You are right")
      setBackgroundColor("green")
      setFontSize(30)
    } else {
      setRight("You are wrong")
      setBackgroundColor("red")
      setFontSize(30)
    }
  }

  return (
    <>
        {
        (!fact)?
        (<>
          <h1>
            No Fact Arrived <Link to="/list"> go back</Link>
          </h1>
        </>):
        (<>
          <div className="myFact" style={{backgroundColor:backgroundColor}}>
            <h1>Fact: {fact.text}</h1>
            <img src={fact.src} alt=""/>
          </div> 
          <form onSubmit={handleSubmit}>
              <input type="text" name="answer" id="answer" placeholder = "Yes/No" onChange={handleWrite} />
              <button>SEND</button>
          </form>

          {right.length > 0 ? <div className="mark" >{right}</div> : null}
        </>)
        }
    </>
  )
}


