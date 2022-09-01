import { Link } from "react-router-dom";
import { FactCard } from "../fact/FactCard";
import { FactProps } from "../fact/factModel";



interface FactsListProps {
  facts: FactProps[];
}

export const FactsList = ({ facts }: FactsListProps) => {
  return (
    <div>
      <h2 className="header">Which quiz would you take?</h2>
      <div className="grid">
        {facts.map((fact) => {
          return (
            <Link key={fact.id} className="text-decoration" to={`/fact/${fact.id}`}>
              <FactCard fact={fact} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
