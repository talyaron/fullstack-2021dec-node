import { Link } from "react-router-dom";
import { FactCard } from "../personalFacts/FactCard";
import { FactProps } from "../personalFacts/factModel";
import '../factList/factList.scss';


interface FactsListProps {
  facts: FactProps[];
}

export const FactsList = ({ facts }: FactsListProps) => {
  return (
    <div>
      <h2 className="header">True or False Facts Game</h2>
      <div className="grid">
        {facts.map((fact) => {
          return (
            <Link key={fact.id} className="text-decoration" to={`/PersonalFact/${fact.id}`}>
              <FactCard fact={fact} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
