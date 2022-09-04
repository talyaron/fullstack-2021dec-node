import { useParams, Link, useNavigate } from "react-router-dom";
import { FactProps} from "./factModel";
import { OptionCard } from './OptionCard'


type FactsCompProps = {
  facts: FactProps[]
}


export const Fact: React.FC<FactsCompProps> = ({ facts }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  console.log(facts);

  const fact = facts.find((fct) => fct.id === id);

  if (fact) {
    return (
      <div>
        <Link className="text-decoration" to="/list">
          Back to All Facts
        </Link>
        {/* <h1>Fact: {fact ? fact.text : null} </h1> */}

        <h2 className="header">Choose the right answer</h2>
        <div className="flex">

          <OptionCard
            styles={{ border: "4px solid darkgreen" }}
            option={fact.options.true}
          />
          <OptionCard
            styles={{ border: "4px solid darkred" }}
            option={fact.options.false}
          />

        </div>
      </div>
    );
  } else {

    return (
      <h1>
        The Fact is Missing &nbsp;&nbsp;&nbsp;
        <Link className="text-decoration" to="/list">
          Back to All Facts
        </Link>
      </h1>
    );
  }
};

