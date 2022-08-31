import { useParams, Link } from "react-router-dom";
import { FactProps } from "./factModel";
import { OptionCard } from './OptionCard'


interface FactsCompProps {
  facts: Array<FactProps>;
  elephant: Array<FactProps>;
}



export const Fact = ({ facts, elephant }: FactsCompProps) => {
  console.log(facts);

  const { id } = useParams();
  console.log(id);

  const fact = facts.find((fct) => fct.id === id);

 
  if (fact) {
    return (
      <div>
        <Link to="/list">Back</Link>
        {/* <h1>Fact: {fact ? fact.text : null} </h1> */}

        <h2 className="header">Choose the wright answer</h2>

        <div className="flex">
          {elephant.map((element) => (
            <OptionCard key={element.id} option={element} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <h1>
        Missing fact - <Link to="/list"> go back</Link>
      </h1>
    );
  }
};

