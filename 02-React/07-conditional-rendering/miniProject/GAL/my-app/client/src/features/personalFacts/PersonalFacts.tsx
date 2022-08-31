import { useParams, Link } from "react-router-dom";
import { FactProps } from "./factModel";


interface FactsCompProps {
  facts: Array<FactProps>;
}

export const PersonalFacts = ({ facts }: FactsCompProps) => {
  console.log(facts);

  const { id } = useParams();
  console.log(id);

  const fact = facts.find((fct) => fct.id === id);

  if (fact) {
    return (
      <div>
        <Link to="/FactList">Back</Link>
        <h1>Fact: {fact ? fact.text : null} </h1>
      </div>
    );
  } else {
    return (
      <h1>
        Missing fact - <Link to="/FactList"> go back</Link>
      </h1>
    );
  }
};
