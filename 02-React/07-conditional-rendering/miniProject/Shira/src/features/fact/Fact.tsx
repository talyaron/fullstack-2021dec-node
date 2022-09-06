import { useParams, Link, useNavigate } from "react-router-dom";
import { FactProps } from "./factModel";
import { AnswerCard } from "./AnswerCard";

type FactsCompProps = {
  facts: FactProps[];
};

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
          Back
        </Link>

        <h2 className="header">Choose the correct answer:</h2>
        <div className="flex">
          <AnswerCard isCorrect={true} answer={fact.answers.true} />
          <AnswerCard isCorrect={false} answer={fact.answers.false} />
        </div>
      </div>
    );
  } else {
    return (
      <h1>
        The Fact is Missing ;
        <Link className="text-decoration" to="/list">
          Back 
        </Link>
      </h1>
    );
  }
};
