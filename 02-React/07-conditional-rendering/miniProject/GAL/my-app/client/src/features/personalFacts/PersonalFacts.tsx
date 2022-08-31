import { useParams, Link } from "react-router-dom";
import { FactProps, } from "./factModel";
import { OptionCard } from "./OptionCard";

interface FactsCompProps {
  facts: Array<FactProps>;
  barca: Array<FactProps>;
  realMadrid: Array<FactProps>;
  atletic: Array<FactProps>;
  sevilla: Array<FactProps>;
}

export const PersonalFacts = ({ facts }: FactsCompProps) => {
  const { id } = useParams();
  console.log(id);

  const fact = facts.find((fct) => fct.id === id);

  if (fact) {
    return (
      <div>
        <Link to="/FactList">Back</Link>

        <div>
          <OptionCard option={fact.options.true} />
          <OptionCard option={fact.options.false} />
        </div>
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
