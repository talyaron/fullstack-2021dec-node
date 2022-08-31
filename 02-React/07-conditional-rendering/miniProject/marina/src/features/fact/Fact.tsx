import { useParams, Link } from "react-router-dom";
import { FactProps } from "./factModel";


interface FactsCompProps {
  facts: Array<FactProps>;
}

export const Fact = ({ facts }: FactsCompProps) => {
  console.log(facts);

  const { id } = useParams();
  console.log(id);

  const fact = facts.find((fct) => fct.id === id);

  // const answer = getFact(id, items)
  if (fact) {
    return (
      <div>
        <Link to="/list">Back</Link>
        <h1>Fact: {fact ? fact.text : null} </h1>
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

// function getFact(id: number, fact: FactInterface[]): FactInterface | undefined {
//   if (id) {
//     return items.find((item) => item.id === id);
//   } else {
//     return;
//   }
// }
